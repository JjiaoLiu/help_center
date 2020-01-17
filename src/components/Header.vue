<template>
    <div class="header">
        <div class="btn_back" @click="back">
            <img src="./../assets/icon_back.png" alt="back" class="icon_back">
        </div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            msg: String,
            toAndriod: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        methods: {
            back() {
                return this.toAndriod ? window.android.backHome() : this.$router.back();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/mixin";

    .header {
        position: relative;
        height: px2vw(168px);
        box-shadow:0 2px 2px 0 rgba(170,170,170,0.2)
    }

    .icon_back {
        width: px2vw(31px);
    }

    .btn_back {
        width: px2vw(168px);
        cursor: pointer;
        display: flex;
        height: 100%;
        align-items: center;
        position: absolute;
        left: 0;
        top: 0;
        padding-left: px2vw(50px);
    }

    h1 {
        margin: 0;
        font-size: px2vw(48px);
        font-weight: 500;
        width: 100%;
        text-align: center;
        color: rgba(40, 40, 40, 1);
        line-height: px2vw(168px);
    }
</style>
