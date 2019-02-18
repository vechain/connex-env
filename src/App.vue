<template>
    <div class="app">
        <div>
            <div v-if="targetHref" class="hero container grid-lg">
                <Bootstrap :target="targetHref"/>
                <div class="text-center">
                    <p class="btn btn-link">Suggested Downloads</p>
                    <div>
                        <p>
                            <DownloadAssets type="button" :assets="syncReleases[0].assets"/>
                        </p>
                        <p>
                            <a class="btn btn-link">All supported platforms</a>
                        </p>
                        <DownloadAssets type="icons" :assets="syncReleases[0].assets"/>
                    </div>
                </div>
            </div>
            <Home v-else/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { targetHref, platform } from './utils'
import Home from './components/Home.vue'
import Bootstrap from './components/Bootstrap.vue'
import DownloadAssets from './components/DownloadAssets.vue'

@Component({
    components: {
        Home,
        Bootstrap,
        DownloadAssets
    },
})
export default class App extends Vue {
    private syncReleases = require('./assets/sync-releases') as Release[]
    private targetHref = targetHref
    private platform = platform

    public created() {
        this.$ga.page('/connex-env')
    }
}
</script>
<style lang="scss" scoped>
.app {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}
</style>
