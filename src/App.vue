<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

    export default {
        name: 'app',
    }
</script>

<style lang="scss">
    @import "assets/mixin";

    body {
        margin: 0;
    }

    div {
        box-sizing: border-box;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #282828;
    }
</style>
