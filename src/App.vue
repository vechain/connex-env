<template>
    <div class="app">
        <Bootstrap v-if="$env.target.href"/>
        <Home v-else/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Home from './components/Home.vue'
import Bootstrap from './components/Bootstrap.vue'

@Component({
    components: {
        Home,
        Bootstrap,
    },
})
export default class App extends Vue {
}
</script>
