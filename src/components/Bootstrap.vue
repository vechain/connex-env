<template>
    <div class="text-center">
        <div>Your browser is missing Connex to run VeChain App</div>
        <div class="target-box">
            <span class="target text-serif">{{target}}</span>
            <a class="btn btn-primary open-btn" @click="open">Open</a>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
// tslint:disable-next-line:no-var-requires
const customProtocolDetection = require('custom-protocol-detection')

@Component
export default class Bootstrap extends Vue {
    @Prop(String)
    private target!: string
    @Emit('fallback')
    private emitFallback() { }

    private open() {
        const vechainAppUrl = (this.target.startsWith('/') ? 'vechain-app://' : 'vechain-app:///') + this.target
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
    min-width: 40%;
    margin: 0.5rem 0rem;
    box-shadow: 0px 0px 5px 0.5px rgba(150, 146, 146, 0.05) inset;
}
.target {
    flex: 1 1 auto;
    margin: 0rem 1rem;
    text-align: center;
}
.open-btn {
    flex: 0 0 auto;
}
</style>
