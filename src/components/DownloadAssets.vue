<template>
    <table v-if="type==='table'" class="table table-hover" style="font-size:0.7rem;">
        <thead>
            <tr>
                <th>Platform</th>
                <th>File Size</th>
                <th>Checksum</th>
                <th>Download</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(asset, i) in assets" :key="i">
                <td>{{asset.platform | osName}}</td>
                <td>{{asset.size.toLocaleString()}}</td>
                <td>
                    <a
                        :href="`data:,${asset.checksum}`"
                        :download="`${asset.fileName}-sha512-base64.txt`"
                        target="_blank"
                    >SHA512</a>
                </td>
                <td>
                    <a :href="asset.url" target="_blank">{{asset.fileName}}</a>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else-if="type==='icons'" class="text-center">
        <a
            v-for="(asset, i) in assets"
            :key="i"
            class="asset-block"
            :href="asset.url"
            target="_blank"
        >
            <img width="64" height="64" :src="asset.platform | osLogo">
            <div>{{asset.platform | osName}}</div>
        </a>
    </div>
    <a
        v-else
        class="btn btn-primary"
        :href="downloadUrl || fallbackHref"
        :target="downloadUrl? '_blank': ''"
        @click="emitFallback"
    >
        Download Sync
        <span v-if="downloadUrl" style="font-size:0.6rem;">for {{platform | osName}}</span>
    </a>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { platform } from '../utils'

@Component
export default class DownloadAssets extends Vue {
    @Prop(String)
    private type !: 'table' | 'icons' | 'button'
    @Prop(Array)
    private assets!: Release.Asset[]
    @Prop(String)
    private fallbackHref!: string

    private platform = platform

    @Emit('fallback')
    private emitFallback() { }

    private get matchedSyncAsset() {
        return this.assets.find(a => a.platform === this.platform) || null
    }
    private get downloadUrl() {
        return this.matchedSyncAsset ? this.matchedSyncAsset.url : ''
    }
}
</script>
<style lang="scss" scoped>
.asset-block {
    display: inline-block;
    padding: 1.5rem 2.5rem;
    background-color: rgba(0, 0, 0, 0.05);
    text-align: center;
    color: currentColor;
    user-select: none;
    text-decoration: none;
    margin: 1rem;
}
.asset-block:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
