<template>
    <div class="container grid-lg">
        <div class="columns" style="margin-bottom:5rem;">
            <div class="column col-lg-5 col-md-12">
                <div class="text-center" style="margin-bottom:1rem;">
                    <img width="128" height="128" src="../assets/sync-logo.png">
                    <h2>Sync</h2>
                    <div class="caption">
                        by
                        <a href="https://www.vechain.org/">VeChain Foundation</a>
                    </div>
                </div>
                <p
                    style="font-size:1rem;"
                >Sync provides a seamless experience for users and developers. Which is designed to provide the superior user experiences on the dApps on the VeChainThor blockchain. It serves as the dApp environment to provide unlimited potential for developers and users.</p>
                <div class="text-center">
                    <template v-if="preferredAsset">
                        <a
                            class="btn btn-primary btn-download"
                            :href="preferredAsset.url"
                            target="_blank"
                        >Download Sync</a>
                        <p
                            class="py-2 caption"
                        >{{$env.syncReleases[0].version}} for {{$env.platform | osName}} ({{preferredAsset.size | size}})</p>
                    </template>
                    <a v-else class="btn btn-primary btn-download" href="#downloads">Download Sync</a>
                </div>
            </div>
            <div class="column col-lg-7 col-md-12 text-center">
                <img
                    class="screenshot"
                    style="margin-bottom:2rem"
                    src="../assets/sync-ss-light.png"
                >
                <img class="screenshot" src="../assets/sync-ss-dark.png">
            </div>
        </div>
        <div class="text-center" style="margin-bottom:5rem;">
            <h4 class="text-center" id="downloads">All Supported Platforms</h4>
            <DownloadAssets :assets="$env.syncReleases[0].assets"/>
        </div>
        <div>
            <h4 class="text-center">All Releases</h4>
            <div v-for="(release, i) in $env.syncReleases" :key="i">
                <h5>v{{release.version}}</h5>
                <div>released at {{new Date(release.releaseDate).toLocaleString()}}</div>
                <DownloadAssets table :assets="release.assets"/>
                <p/>
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
export default class SyncPage extends Vue {
    get preferredAsset() { return this.$env.preferredAsset(this.$env.syncReleases[0].assets) }
}
</script>
<style lang="scss" scoped>
.screenshot {
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    border-style: none;
}
.btn-download {
    padding: 0.4rem 1.5rem;
    height: auto;
    border-radius: 5px;
}
</style>

