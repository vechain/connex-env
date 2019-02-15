<template>
    <div class="container grid-lg">
        <Home/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from './components/Home.vue'

@Component({
    components: {
        Home
    },
})
export default class App extends Vue {
    private connex = window.connex || null
    private syncReleases = require('./sync-releases') as Release[]
}
</script>
<style lang="scss" scoped>
</style>
