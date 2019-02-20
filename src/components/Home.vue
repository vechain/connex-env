<template>
    <div>
        <div class="hero bg-primary px-2">
            <div class="container grid-lg">
                <h3>Connex Powered VeChain Wallets</h3>
            </div>
        </div>
        <div class="container grid-lg">
            <div class="text-center" style="margin:2rem 0rem;">
                <div class="d-inline-block" style="margin-right: 2rem;">
                    <img width="32" height="32" src="../assets/sync-logo.png">
                    <div>Sync</div>
                </div>
                <div class="d-inline-block">
                    <img width="32" height="32" src="../assets/comet-logo.png">
                    <div>Comet</div>
                </div>
            </div>
        </div>
        <div class="container grid-lg">
            <div class="columns">
                <div class="column col-lg-5 col-md-12" style="padding-top: 2rem;">
                    <p
                        style="font-size:1rem;"
                    >Sync provides a seamless experience for users and developers. which is designed to provide the superior user experiences on the dApps on the VeChainThor blockchain. It serves as the dApp environment to provide unlimited potential for developers and users.</p>

                    <div class="text-center">
                        <p>
                            <DownloadAssets
                                :assets="$env.syncReleases[0].assets"
                                type="button"
                                fallback-href="#downloads"
                            />
                        </p>
                        <div>v{{$env.syncReleases[0].version}}</div>
                        <div
                            class="text-gray"
                        >Released at {{new Date($env.syncReleases[0].releaseDate).toLocaleDateString()}}</div>
                    </div>
                </div>
                <div class="column col-lg-7 col-md-12 text-center">
                    <h5>Light Theme</h5>
                    <img class="app-ss" src="../assets/sync-ss-light.png">
                    <h5 style="margin-top:2rem;">Dark Theme</h5>
                    <img class="app-ss" src="../assets/sync-ss-dark.png">
                </div>
            </div>
            <div class="hero text-center">
                <h4 class="text-center" id="downloads">All Supported Platforms</h4>
                <DownloadAssets type="icons" :assets="$env.syncReleases[0].assets"/>
            </div>
            <div class="hero">
                <h4 class="text-center">All Releases</h4>
                <div v-for="(release, i) in $env.syncReleases" :key="i">
                    <h5>v{{release.version}}</h5>
                    <div>released at {{new Date(release.releaseDate).toLocaleString()}}</div>
                    <DownloadAssets type="table" :assets="release.assets"/>
                    <p/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DownloadAssets from './DownloadAssets.vue'

@Component({
    components: {
        DownloadAssets
    }
})
export default class Home extends Vue {

}
</script>
<style lang="scss" scoped>
.app-ss {
    width: 100%;
    box-shadow: 0 10px 30px rgba(26, 20, 20, 0.6);
    border-radius: 3px;
    border-style: none;
}
</style>
