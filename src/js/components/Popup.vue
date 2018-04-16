<template>
    <div>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header-wrapper">
                            <div class="header-wrapper__header-text">Ribbon Reminder</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="enter-form">
            <div class="container">
                <div class="row">

                    <div class="col-9">
                        <div class="form-group">
                            <textarea v-model="newRibbonFormData.text" class="form-control" placeholder="Ribbon Text"></textarea>
                        </div>
                    </div>

                    <div class="col-3">
                        <button @click="saveRibbon" class="btn btn-blue btn-sm" type="button">
                            <i class="fa fa-plus fa-fw"></i> Add
                        </button>
                    </div>

                </div>
            </div>
        </section>

        <section class="ribbon-list">
            <div class="container">
                <div class="row">
                    <div v-if="ribbons.length" v-for="(ribbon, index) in ribbons" class="col-12">

                        <div class="ribbon-list-item">
                            <div class="ribbon-list-item__ribbon-list-text-wrapper">
                                <div class="ribbon-list-item__ribbon-list-text-wrapper__text">
                                    {{ribbon.text}}
                                </div>
                                <div class="ribbon-list-item__ribbon-list-text-wrapper__date">
                                    {{getHumanReadableDate(ribbon.timestamp)}}
                                </div>
                            </div>
                            <div class="ribbon-list-item__ribbon-list-button-wrapper">

                                <button v-if="ribbon.status" @click="toggleStatus(index)" class="btn btn-blue btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-eye fa-fw"></i> Untie Ribbon
                                </button>

                                <button v-if="!ribbon.status" @click="toggleStatus(index)" class="btn btn-light-blue btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-eye-slash fa-fw"></i> Tie Ribbon
                                </button>

                                <button @click="deleteRibbon(index)" class="btn btn-red btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-times fa-fw"></i> Delete
                                </button>

                            </div>
                        </div>

                    </div>

                    <div class="col-12">
                        <div v-if="!ribbons.length" class="text-muted">
                            <i class="fa fa-smile-o fa-fw"></i> Use the form above to add a ribbon.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="ribbons.length" class="delete-all">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <button @click="deleteAllRibbons" class="btn btn-red btn-sm btn-block">
                            <i class="fa fa-trash fa-fw"></i> Delete All Ribbons
                        </button>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export default {
    name: 'popup',
    data () {
        return {
            ribbons: [],
            newRibbonFormData: {
                text: '',
                timestamp: '',
                status: true
            }
        }
    },
    computed: {
    },
    methods: {
        async getRibbons () {
            try {
                var result = await chrome.storage.sync.get({ribbons: []})
                return result.ribbons
            } catch (error) {
                console.log(error)
            }
        },
        async deleteAllRibbons () {
            try {
                await this.$dialog.confirm('Are you sure you want to delete all your Ribbons?')
            } catch (error) {
                return
            }

            try {
                await chrome.storage.sync.remove('ribbons')
                this.ribbons = await this.getRibbons()
            } catch (error) {
                console.log(error)
            }
        },
        async saveRibbon () {
            // Make sure they have some text set
            if (!this.newRibbonFormData.text) {
                this.$dialog.alert('Ribbon text is required.')
                return
            }

            // Add timestamp to ribbon
            this.newRibbonFormData.timestamp = Date.now()

            // Add new ribbon to
            this.ribbons.unshift(this.newRibbonFormData)

            // Reset form data
            this.newRibbonFormData = {
                text: '',
                timestamp: '',
                status: true
            }
        },
        async deleteRibbon (index) {
            try {
                await this.$dialog.confirm('Are you sure you want to delete this Ribbon?')
            } catch (error) {
                return
            }

            this.ribbons.splice(index, 1)
        },
        toggleStatus (index) {
            this.ribbons[index].status = !this.ribbons[index].status
        },
        setBadgeText () {
            var count = 0;
            for (var x = 0; x < this.ribbons.length; x++) {
                if (this.ribbons[x].status) {
                    count++
                }
            }

            if (!count) {
                chrome.browserAction.setBadgeText({text: ''})
                return
            }

            chrome.browserAction.setBadgeText({text: String(count)})
            chrome.browserAction.setBadgeBackgroundColor({color: '#347693'})
        },
        getHumanReadableDate(date) {
            return distanceInWordsToNow(date)
        }
    },
    async mounted () {
        this.ribbons = await this.getRibbons()
    },
    created () {
    },
    watch: {
        ribbons: {
            async handler(val) {
                // Make sure to store the new array of ribbons in sync
                try {
                    await chrome.storage.sync.set({'ribbons': val})
                    this.setBadgeText()
                } catch (error) {
                    console.log(error)
                }
            },
            deep: true
        }
    },
    validations: {
    }
}
</script>

<style lang="scss" scoped>
    @import '../../css/components/variables.scss';

    .header {
        background-color: $red;
        padding: 14px 0 12px;
    }

    .header-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        &__header-text {
            color: $white;
            font-size: 1.4rem;
        }
    }

    .enter-form {
        padding: 5px 0 12px;
        background-color: $red;
        margin-bottom: 25px;
    }

    .ribbon-list {
        padding: 10px 0;
    }

    .ribbon-list-item {
        border: 1px solid darken($off-white, 8%);
        background: $off-white;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 6px;
        box-shadow: $light-box-shadow;

        &__ribbon-list-text-wrapper {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            &__text {
                margin-bottom: 3px;
                font-size: 1.2rem;
            }

            &__date {
                color: $muted;
                font-size: 0.7rem;
            }
        }

        &__ribbon-list-button-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &__button{
                width: 48%;
            }
        }
    }

    .delete-all {
        padding: 10px 0;
        margin-top: 60px;
    }
</style>