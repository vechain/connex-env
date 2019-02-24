<template>
    <div class="container grid-lg">
        <div class="columns">
            <div class="column col-lg-7 col-md-12 text-center">
                <img class="screenshot" src="../assets/comet-ss-dark.png">
            </div>
            <div class="column col-lg-5 col-md-12">
                <div class="text-center" style="margin-bottom:1rem;">
                    <img width="128" height="128" src="../assets/comet-logo.png">
                    <h2>Comet</h2>
                    <div class="text-gray">
                        by
                        <a href="https://www.totientlabs.com/">Totient Labs</a>
                    </div>
                </div>
                <p
                    style="font-size:1rem;"
                >Comet is a Chrome extension that enables you to explore the world of decentralized applications on the VeChain.</p>
                <div class="text-center">
                    <a
                        class="btn btn-primary btn-download"
                        target="_blank"
                        href="https://chrome.google.com/webstore/detail/comet/jpkkakbelpcambmhdcaoidiejaikiemn"
                    >Get Comet!</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CometPage extends Vue {

}
</script>
<style lang="scss" scoped>
.screenshot {
    width: 70%;
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


