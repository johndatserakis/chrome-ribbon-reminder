<template>
    <div>

        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header-wrapper">
                            <div class="header-wrapper__header-content">Ribbon Reminder</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="enter-form">
            <div class="container">
                <div class="row">
                    <div class="col-12">

                        <div class="input-group">
                            <input v-model="newRibbonFormData.content" type="text" class="form-control" placeholder="Ribbon Text" aria-label="Ribbon Text" aria-describedby="Ribbon Text">
                            <div class="input-group-append">
                                <button @click="saveRibbon" class="btn btn-primary" type="button">Add</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section class="ribbon-list">
            <div class="container">
                <div class="row">
                    <div v-for="ribbon in ribbons" class="col-12">

                        <div class="ribbon-list-item">
                            <div class="ribbon-list-item__ribbon-list-content-wrapper">
                                <div class="ribbon-list-item__ribbon-list-content-wrapper__content">
                                    {{ribbon.content}}
                                </div>
                                <div class="ribbon-list-item__ribbon-list-content-wrapper__date">
                                    {{ribbon.timestamp}}
                                </div>
                            </div>
                            <div class="ribbon-list-item__ribbon-list-button-wrapper">
                                <div class="ribbon-list-item__ribbon-list-button-wrapper__button">
                                    <div v-if="ribbon.status">
                                        <button class="btn-primary">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                    </div>

                                    <div v-if="!ribbon.status">
                                        <button class="btn-default">
                                            <i class="fa fa-eye-slash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {{ribbons}}

        {{newRibbonFormData}}


        <!-- <input id="ribbon-input" type="text"> -->





        <!-- <div id="ribbon-display" class="ribbon-display"></div> -->



    </div>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {
            ribbons: [],
            newRibbonFormData: {
                content: '',
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

        async saveRibbon () {
            // Add timestamp to ribbon
            this.newRibbonFormData.timestamp = Date.now()

            // Add new ribbon to
            this.ribbons.push(this.newRibbonFormData)

            // Make sure to store the new array of ribbons in sync
            try {
                await chrome.storage.sync.set({'ribbons': this.ribbons})
            } catch (error) {
                console.log(error)
            }

            // Reset form data
            this.newRibbonFormData = {
                content: '',
                timestamp: '',
                status: true
            }
        }
    },
    async mounted () {
        // console.log('here')

        this.ribbons = await this.getRibbons()
        console.log(this.ribbons)
        // await updateRibbonDisplay(ribbons)
    },
    created () {
    },
    watch: {
    },
    validations: {
    }
}
</script>

<style lang="scss" scoped>

    .header-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-wrapper__header-content {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    .result {
        color: blue;
    }

</style>