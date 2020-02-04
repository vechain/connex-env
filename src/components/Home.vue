<template>
    <div>
        <div class="bg-primary px-2">
            <div class="container grid-lg">
                <div class="navbar">
                    <section class="navbar-section" style="margin: 0px -0.4rem;">
                        <a class="nav-link" href="https://www.vechain.org/">VeChain Foundation</a>
                    </section>
                    <section class="navbar-section">
                        <a class="nav-link" href="https://github.com/vechain">
                            <img src="../assets/github-logo.svg" width="18" height="18">
                        </a>
                    </section>
                </div>
                <div style="margin:2rem 0rem;">
                    <h1 style="font-weight:200;margin-bottom:0rem;">VeChain Wallets</h1>
                    <div>
                        <a
                            class="nav-link"
                            href="https://github.com/vechain/connex#introduction"
                            style="margin: 0px -0.4rem;"
                        >Connex Powered</a>
                    </div>
                </div>
                <div class="text-center">
                    <span
                        class="tab-item c-hand"
                        @click="switchTab('#sync')"
                        :class="{active: hash!=='#thor-wallet'}"
                    >Sync</span>
                    <span
                        class="tab-item c-hand"
                        @click="switchTab('#thor-wallet')"
                        :class="{active: hash==='#thor-wallet'}"
                    >Thor Wallet</span>
                </div>
            </div>
        </div>
        <div style="padding:4rem 0rem;">
            <SyncPage v-show="hash !== '#thor-wallet'"/>
            <ThorWalletPage v-show="hash === '#thor-wallet'"/>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SyncPage from './SyncPage.vue'
import ThorWalletPage from './ThorWalletPage.vue'

@Component({
    components: {
        SyncPage,
        ThorWalletPage
    }
})
export default class Home extends Vue {
    private hash = location.hash

    private created() {
        this.$ga.page('/connex-env/home')
    }

    private switchTab(hash: string) {
        location.href = hash
        this.hash = hash
    }
}
</script>
<style lang="scss" scoped>
.nav-link {
    padding: 0.25rem 0.4rem;
    color: currentColor;
}

.tab-item {
    padding: 0.1rem 0.6rem;
    margin: 0rem 0.5rem;
    color: currentColor;
    text-decoration: none;
}
.tab-item.active {
    font-size: 1rem;
    border-bottom: 2px solid white;
}
</style>
