<template>
    <div class="container grid-lg">
        <div class="columns">
            <div style="margin-bottom:1rem;" class="column col-lg-7 col-md-12 text-center">
                <img class="screenshot" src="../assets/thor-ss-wallet.png" alt="Comet Screenshot" />
            </div>
            <div class="column col-lg-5 col-md-12">
                <div class="text-center" style="margin-bottom:1rem;">
                    <img
                        width="128"
                        height="128"
                        src="../assets/thor-wallet.png"
                        alt="thor wallet logo"
                    />
                    <h2>VeChainThor Wallet</h2>
                    <div class="text-gray">
                        by
                        <a href="https://www.vechain.org/">VeChain Foundation</a>
                    </div>
                </div>
                <p
                    style="font-size:1rem;"
                >VeChainThor Wallet is a light mobile wallet app to provide users with a secure, simple, fully functional portal of the VeChainThor blockchain.</p>
                <p style="font-size: 1rem; margin-bottom: 0px;">
                    Core features of VeChainThor Wallet are as follows:
                </p>
                <ul style="list-style: none; padding-left: 0px; margin: 0px">
                        <li>-Smart Crypto Asset Management</li>
                        <li>-Collectibles Marketplace</li>
                        <li>-Explore Applications on VeChainThor</li>
                    </ul>
                <div class="text-center" style="margin-top: 20px">
                    <a
                        href="https://apps.apple.com/app/id1397679485"
                        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-07-28&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"
                    ></a>
                    <br/>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.vechain.wallet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    >
                        <img
                            style="width: 158px; height: 61px"
                            alt="Get it on Google Play"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CometPage extends Vue {}
</script>
<style lang="scss" scoped>
.screenshot {
    width: 50%;
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


