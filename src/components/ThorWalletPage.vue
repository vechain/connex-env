<template>
    <div class="container grid-lg">
        <div class="columns" style="margin-bottom:5rem;">
              <div class="column col-lg-5 col-md-12">
                <div class="text-center" style="margin-bottom:1rem;">
                    <img width="128" height="128" src="../assets/thor-wallet.png" alt="thorWallet Logo">
                    <h2>VeChainThor Wallet</h2>
                    <div class="caption">
                        by
                        <a href="https://www.vechain.org/">VeChain Foundation</a>
                    </div>
                </div>
                <div
                    style="font-size:1rem;"
                >VeChainThor Wallet is a light mobile wallet app to provide users with a secure, simple, fully functional portal of the VeChainThor blockchain.</div>
                <p style="font-size: 1rem; margin-bottom: 0px;">
                    Core features of VeChainThor Wallet are as follows:
                </p>
                <ul style="list-style: none; padding-left: 0px; margin: 0px">
                        <li>- Smart Crypto Asset Management</li>
                        <li>- Collectibles Marketplace</li>
                        <li>- Explore Applications on VeChainThor</li>
                    </ul>
                <div class="text-center" style="margin-top: 20px">
                    <a
                        href="https://apps.apple.com/app/id1397679485"
                        style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-07-28&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"
                    ></a>
                    <p>
                        <a
                            class="caption"
                            href="https://vechain-cdn.oss-cn-shanghai.aliyuncs.com/wallet/Usermanual/Vechain%20Thor%20Wallet%20-IOS1.4.pdf"
                        >iOS User Manual</a>
                    </p>
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
                    <p>
                        <a
                            class="caption"
                            href="https://vechain-cdn.oss-cn-shanghai.aliyuncs.com/wallet/Usermanual/Vechain%20wallet%20manual-android%201.4.pdf"
                        >Android User Manual</a>
                    </p>
                </div>
            </div>
            <div class="column col-lg-7 col-md-12 text-center">
                <img
                    class="screenshot"
                    style="margin-top:2rem"
                    src="../assets/thor-ss-wallet.png"
                    alt="wallet screenshot"
                >
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


