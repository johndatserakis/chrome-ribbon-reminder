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
                    <div v-if="processedRibbons.length" v-for="(ribbon, index) in processedRibbons" class="col-12">
                        <div class="ribbon-list-item">
                            <div class="ribbon-list-item__ribbon-list-text-wrapper">
                                <div v-if="!ribbon.isEditing" class="ribbon-list-item__ribbon-list-text-wrapper__text" v-html="ribbon.text"></div>

                                <div v-else>
                                    <textarea v-model="temporaryEditingContent"></textarea>
                                </div>

                                <div class="ribbon-list-item__ribbon-list-text-wrapper__date">
                                    {{getHumanReadableDate(ribbon.timestamp)}}
                                </div>
                            </div>

                            <div class="ribbon-list-item__ribbon-list-button-wrapper">
                                <!-- Not Editing -->
                                <button v-if="!ribbon.isEditing && ribbon.status" @click="toggleStatus(index)" class="btn btn-blue btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-eye fa-fw"></i> Untie
                                </button>

                                <button v-if="!ribbon.isEditing && !ribbon.status" @click="toggleStatus(index)" class="btn btn-light-blue btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-eye-slash fa-fw"></i> Tie
                                </button>

                                <button v-if="!ribbon.isEditing" @click="deleteRibbon(index)" class="btn btn-red btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-times fa-fw"></i> Delete
                                </button>

                                <button v-if="!ribbon.isEditing" @click="toggleEditStatus(index)" class="btn btn-grey btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-pencil fa-fw"></i> Edit
                                </button>

                                <button v-if="!ribbon.isEditing" @click="moveRibbon(index, 'up')" class="btn btn-grey btn-sm ribbon-list-item__ribbon-list-button-wrapper__button" :disabled="ribbon.order === 0">
                                    <i class="fa fa-arrow-up fa-fw"></i>
                                </button>

                                <button v-if="!ribbon.isEditing" @click="moveRibbon(index, 'down')" class="btn btn-grey btn-sm ribbon-list-item__ribbon-list-button-wrapper__button" :disabled="ribbon.order === ribbons.length - 1">
                                    <i class="fa fa-arrow-down fa-fw"></i>
                                </button>

                                <!-- Editing -->
                                <button v-if="ribbon.isEditing" @click="submitEdit(index)" class="btn btn-grey btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-save fa-fw"></i> Save
                                </button>

                                <button v-if="ribbon.isEditing" @click="cancelEdit(index)" class="btn btn-red btn-sm ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <i class="fa fa-times fa-fw"></i> Cancel
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
                status: true,
                isEditing: false,
                order: null
            },
            temporaryEditingContent: null,
            version: null
        }
    },
    computed: {
        processedRibbons () {
            this.ribbons.sort((a, b) => a.order - b.order)
            return this.ribbons
        }
    },
    methods: {
        async getRibbons () {
            try {
                var result = await browser.storage.sync.get({ribbons: []})
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
                await browser.storage.sync.remove('ribbons')
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

            // Set this as the latest ribbon
            this.newRibbonFormData.order = 0

            // Increase each ribbon's order by 1
            for (let i = 0; i < this.ribbons.length; i++) {
                this.ribbons[i].order = this.ribbons[i].order + 1
            }

            // Add new ribbon to
            this.ribbons.unshift(this.newRibbonFormData)

            // Reset form data
            this.newRibbonFormData = {
                text: '',
                timestamp: '',
                status: true,
                isEditing: false,
                order: null
            }
        },
        async deleteRibbon (index) {
            try {
                await this.$dialog.confirm('Are you sure you want to delete this Ribbon?')
            } catch (error) {
                return
            }

            this.ribbons.splice(index, 1)

            await this.resetSortOrderOfAllRibbons()
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
                browser.browserAction.setBadgeText({text: ''})
                return
            }

            browser.browserAction.setBadgeText({text: String(count)})
            browser.browserAction.setBadgeBackgroundColor({color: '#347693'})
        },
        getHumanReadableDate(date) {
            return distanceInWordsToNow(date)
        },

        // Editing
        toggleEditStatus (index) {
            this.ribbons[index].isEditing = !this.ribbons[index].isEditing
            this.temporaryEditingContent = this.ribbons[index].text
        },
        submitEdit (index) {
            this.ribbons[index].text = this.temporaryEditingContent
            this.temporaryEditingContent = null
            this.ribbons[index].isEditing = false
        },
        turnOffAllEditingStatuses () {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < this.ribbons.length; i++) {
                    this.ribbons[i].isEditing = false
                }
                resolve()
            })
        },
        cancelEdit (index) {
            this.temporaryEditingContent = null
            this.ribbons[index].isEditing = false
        },

        // Version
        async getVersion () {
            try {
                var result = await browser.storage.sync.get({version: 1})
                return result.version
            } catch (error) {
                console.log(error)
            }
        },
        async setVersion (newVersionNumber) {
            try {
                await browser.storage.sync.set({version: newVersionNumber})
            } catch (error) {
                console.log(error)
            }
        },
        async updateFromVersion1 () {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < this.ribbons.length; i++) {
                    this.ribbons[i].isEditing = false
                    this.ribbons[i].order = i
                }
                resolve()
            })
        },

        // Move
        async moveRibbon (index, type) {
            if (type === 'up') {
                if (this.ribbons[index].order === 0) {
                    return
                } else {
                    // Move the one we want
                    this.ribbons[index].order = this.ribbons[index].order - 1

                    // Move the victim of this move
                    this.ribbons[index - 1].order = this.ribbons[index - 1].order + 1
                }
            }

            if (type === 'down') {
                if (this.ribbons[index].order === this.ribbons.length - 1) {
                    return
                } else {
                    // Move the one we want
                    this.ribbons[index].order = this.ribbons[index].order + 1

                    // Move the victim of this move
                    this.ribbons[index + 1].order = this.ribbons[index + 1].order - 1
                }
            }
        },
        async resetSortOrderOfAllRibbons () {
            return new Promise((resolve, reject) => {
                for (let i = 0; i < this.ribbons.length; i++) {
                    this.ribbons[i].order = i
                }
                resolve()
            })
        },
    },
    async mounted () {
        this.ribbons = await this.getRibbons()
        await this.turnOffAllEditingStatuses()
        this.version = await this.getVersion()

        // Check the version to see if we need to update
        if (this.version < 2) {
            // If we're below version 2, then we need to add ordering
            // and editing to the ribbons because that's new
            await this.updateFromVersion1()

            // Now let's update the version in the localStorage
            await this.setVersion(2)

            // Ok so from now on the updating process is all set and the
            // user data is all good. Next time they open the popup they'll
            // gave the latest version.
        }
    },
    created () {
    },
    watch: {
        ribbons: {
            async handler(val) {
                // Make sure to store the new array of ribbons in sync
                try {
                    await browser.storage.sync.set({'ribbons': val})
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
    @import '../css/components/variables.scss';

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

        textarea {
            width: 100%;
            min-height: 75px;
        }
    }

    .ribbon-list {
        padding: 20px 0;

        textarea {
            width: 100%;
            min-height: 75px;
        }
    }

    .ribbon-list-item {
        border: 1px solid darken($off-white, 4%);
        background: $off-white;
        margin-bottom: 20px;
        padding: 10px;
        border-radius: 6px;
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);

        &__ribbon-list-text-wrapper {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            &__text {
                margin-bottom: 3px;
                font-size: 1.2rem;
                white-space: pre-wrap;
                overflow: scroll;
                word-break: break-all;
            }

            &__date {
                color: $muted;
                font-size: 0.7rem;
            }
        }

        &__ribbon-list-button-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;

            &__button{
                &:not(:last-child) {
                    margin-right: 5px;
                }
            }
        }
    }

    .delete-all {
        padding: 10px 0;
        margin-top: 60px;
    }
</style>