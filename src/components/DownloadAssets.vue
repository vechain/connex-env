<template>
    <table v-if="table" class="table table-hover" style="font-size:0.7rem;">
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
    <div v-else class="text-center">
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
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class DownloadAssets extends Vue {
    @Prop(Boolean)
    private table!: boolean
    @Prop(Array)
    private assets!: Release.Asset[]
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
