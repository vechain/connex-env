<template>
    <div v-if="!simple" class="columns">
        <a
            v-for="(asset, i) in assets"
            :key="i"
            class="column text-center"
            :href="asset.url"
            target="_blank"
        >
            <img width="64" height="64" :src="asset.platform | osLogo">
            <div>{{asset.platform | osName}}</div>
        </a>
    </div>
    <table v-else class="table table-hover">
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
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class DownloadTable extends Vue {
    @Prop(Boolean)
    private simple!: boolean
    @Prop(Array)
    private assets!: Release.Asset[]
}
</script>
