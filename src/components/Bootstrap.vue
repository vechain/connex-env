<template>
    <div class="container hero">
        <div class="text-center">
            <div class="p-relative">
                <div class="p-fixed" style="left:0;top:0;right:0">
                    <span
                        class="label label-warning"
                        style="border-radius: 0px 0px 5px 5px;padding: 0.4rem 1rem;"
                    >Your browser is missing Connex to run VeChain App</span>
                </div>
            </div>
            <div class="target-box my-2">
                <span class="target-url text-serif">{{$env.target.href}}</span>
                <a class="btn btn-primary open-btn" @click="open">Open</a>
            </div>
            <p/>
            <p v-if="!showDownloads">
                <a class="btn btn-link" @click="showDownloads=true">Download Sync</a>
            </p>
            <p v-if="openFailed">Seems VeChain Sync is not installed</p>
            <template v-if="showDownloads">
                <p>
                    <DownloadAssets type="button" :assets="$env.syncReleases[0].assets"/>
                </p>
                <h5>All supported platforms</h5>
                <DownloadAssets type="icons" :assets="$env.syncReleases[0].assets"/>
            </template>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
// tslint:disable-next-line:no-var-requires
const customProtocolDetection = require('custom-protocol-detection')
import DownloadAssets from './DownloadAssets.vue'

@Component({
    components: {
        DownloadAssets
    }
})
export default class Bootstrap extends Vue {
    private openFailed = false
    private showDownloads = false

    private open() {
        const fallback = () => {
            this.openFailed = true
            this.showDownloads = true
        }

        // tslint:disable-next-line:max-line-length
        const vechainAppUrl = `vechain-app://${encodeURIComponent(this.$env.target.network)}/${encodeURIComponent(this.$env.target.href)}`
        customProtocolDetection(vechainAppUrl,
            fallback,
            // tslint:disable-next-line:no-console
            () => console.log('opened with sync'),
            fallback)
    }
}
</script>
<style lang="scss" scoped>
.target-box {
    display: inline-flex;
    align-items: center;
    background-color: #f0f0f0;
    padding: 0.15rem 0.15rem;
    border-radius: 3px;
    max-width: 95%;
    min-width: 50%;
    box-shadow: 0px 0px 5px 0.5px rgba(150, 146, 146, 0.05) inset;
}
.target-url {
    flex: 1 1 auto;
    margin: 0rem 1rem;
    text-align: center;
}
.open-btn {
    flex: 0 0 auto;
}
</style>
