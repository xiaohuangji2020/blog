<template>
    <div id="app">
        <my-nav></my-nav>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import myNav from '@/views/common/nav.vue';

@Component({
    components: {
        myNav
    }
})
export default class App extends Vue {}
</script>

<style>
#app {
    min-height: 100vh;
    background: url(~@/assets/images/bg-1.png) repeat;
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
