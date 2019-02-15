<template>
    <div class="text-center hero">
        <h3>Connex Powered VeChain Wallets</h3>
        <div>
            <img width="64" height="64" src="../assets/sync-logo.png">
        </div>
        <div class="tab">
            <div class="tab-item active">
                <button>Sync</button>
            </div>
            <div class="tab-item">
                <button>Comet</button>
            </div>
        </div>
        <div>
            <button>Download</button>
        </div>
        <div>
            <a>All Platforms ...</a>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Home extends Vue {

}
</script>
