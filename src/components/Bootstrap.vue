<template>
    <div class="text-center">
        <div>
            <p class="label label-warning">Your browser is missing Connex to run VeChain App</p>
        </div>
        <div class="target-box my-2">
            <span class="target-url text-serif">{{targetHref}}</span>
            <a class="btn btn-primary open-btn" @click="open">Open</a>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
// tslint:disable-next-line:no-var-requires
const customProtocolDetection = require('custom-protocol-detection')
import { targetHref, targetNetwork } from '../utils'

@Component
export default class Bootstrap extends Vue {
    private targetHref = targetHref
    private targetNetwork = targetNetwork

    @Emit('fallback')
    private emitFallback() { }    

    private open() {
        const vechainAppUrl = `vechain-app://${targetNetwork}/${targetHref}`
        customProtocolDetection(vechainAppUrl,
            () => this.emitFallback(),
            // tslint:disable-next-line:no-console
            () => console.log('opened with sync'),
            () => this.emitFallback())
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
