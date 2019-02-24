<template>
    <div>
        <div class="bg-primary px-2 head-sec">
            <div class="container grid-lg">
                <div class="navbar">
                    <section class="navbar-section" style="margin: 0px -0.4rem;">
                        <a class="nav-link" href="https://www.vechain.org/">VeChain Foundation</a>
                    </section>
                    <section class="navbar-section">
                        <a class="nav-link" href="https://github.com/vechain">Github</a>
                    </section>
                </div>
                <div class="hero" style="margin-top:-1rem;">
                    <h1 style="font-weight:200;margin-bottom:0rem;">VeChain Wallets</h1>
                    <div>
                        <a
                            class="nav-link"
                            href="https://github.com/vechain/connex#introduction"
                            style="margin: 0px -0.4rem;"
                        >Connex Powered</a>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding:4rem 0rem;">
            <SyncPage/>
            <!-- <CometPage/> -->
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SyncPage from './SyncPage.vue'
import CometPage from './CometPage.vue'

@Component({
    components: {
        SyncPage,
        CometPage
    }
})
export default class Home extends Vue {

}
</script>
<style lang="scss" scoped>
.nav-link {
    padding: 0.25rem 0.4rem;
    color: currentColor;
}

.head-sec {
    position: relative;
    justify-content: center;
}
</style>
