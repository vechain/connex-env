<template>
    <div class="text-center">
        <div class="bg-dark">
            <div class="container grid-lg" style="padding:2.5rem 0rem;">
                <div style="margin: 1rem 0rem;">
                    <i class="icon icon-link mr-2"/>
                    <div class="target flex-centered text-serif" @click="open">{{$env.target.href}}</div>
                </div>
                <div>Unable to launch the VeChain App.</div>
                <div>
                    Your browser is missing Connex environment.
                    <a
                        class="text-italic"
                        style="color:currentColor"
                        target="_blank"
                        href="https://github.com/vechain/connex#introduction"
                    >Learn more.</a>
                </div>
            </div>
        </div>
        <div class="container grid-lg" style="margin-top: 1rem;">
            <p>Install
                <i>VeChain Sync</i> to continue
            </p>
            <template v-if="preferredAsset">
                <a
                    class="btn btn-primary btn-download"
                    :href="preferredAsset.url"
                    target="_blank"
                >Download Sync</a>
                <p
                    class="py-2 caption"
                >v{{$env.syncReleases[0].version}} for {{$env.platform | osName}} ({{preferredAsset.size | size}})</p>
            </template>
            <h5>All supported platforms</h5>
            <DownloadAssets :assets="$env.syncReleases[0].assets"/>
        </div>
        <div class="container grid-lg" style="margin-top: 2rem;">
            <a href="/">Other Downloads</a>
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

    get preferredAsset() { return this.$env.preferredAsset(this.$env.syncReleases[0].assets) }
    private created() {
        this.$ga.page('/connex-env/bootstrap')
    }

    private mounted() {
        setTimeout(() => this.open(), 100)
    }
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
.target {
    display: inline-flex;
    padding: 0.2rem 1rem;
    max-width: 95%;
    min-width: 16rem;
    cursor: pointer;
    transition: all 0.2s;
    background-color: white;
    color: #404040;
}

.btn-download {
    padding: 0.4rem 1.5rem;
    height: auto;
    border-radius: 5px;
}
</style>
