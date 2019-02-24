<template>
    <div class="container text-center" style="margin-top:3rem;">
        <span
            class="label label-warning"
            style="padding: 0.2rem 1rem;"
        >Your browser is missing Connex to run VeChain App</span>
        <div class="py-2 caption">Target URL</div>
        <div style="margin-bottom:2rem;">
            <div class="target flex-centered text-serif" @click="open">{{$env.target.href}}</div>
        </div>
        <p v-if="openFailed">Seems VeChain Sync is not installed</p>
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
        <h5>All supported platforms</h5>
        <DownloadAssets :assets="$env.syncReleases[0].assets"/>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
// tslint:disable-next-line:no-var-requires
const customProtocolDetection = require('custom-protocol-detection')
import DownloadAssets from './DownloadAssets.vue'
import { setTimeout } from 'timers';

@Component({
    components: {
        DownloadAssets
    }
})
export default class Bootstrap extends Vue {
    private openFailed = false
    private showDownloads = false

    get preferredAsset() { return this.$env.preferredAsset(this.$env.syncReleases[0].assets) }

    private mounted() {
        setTimeout(() => this.open(), 500)
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
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0.2rem 1rem;
    max-width: 95%;
    min-width: 50%;
    cursor: pointer;
}

.btn-download {
    padding: 0.4rem 1.5rem;
    height: auto;
    border-radius: 5px;
}
</style>
