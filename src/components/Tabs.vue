<template>
    <section class="tabs">
        <Header :msg="data.title"/>
        <div class="tab-header_wrap">
            <span @click="commit(index)" v-for="(item,index) in data.header"
                  :class="['tab-header',activateTab === index ? 'tab-header_active':'']">
                {{item}}
            </span>
        </div>
        <div class="tab-body" v-for="(item,index) in data.body[activateTab]" :key="index">
            <router-link :to="'/listId/'+item.id+'?activateTab='+activateTab" class="tab-body-list">
                {{item.title}} <img src="./../assets/icon_right.png" alt="next">
            </router-link>
        </div>
    </section>
</template>

<script>
    import Header from "./Header";
    import {mapState} from 'vuex';

    export default {
        name: "Tabs",
        props: {
            data: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        components: {Header},
        computed: {
            ...mapState(['activateTab'])
        },
        methods: {
            commit(index) {
                this.$store.commit('setActivateTab', index)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../assets/mixin";

    .tab-header_wrap {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: px2vw(125px);
        box-shadow: 0 2px 2px 0 rgba(170, 170, 170, 0.2);

        .tab-header {
            line-height: px2vw(117px);
            font-size: px2vw(39px);
            font-weight: 400;
            color: rgba(117, 117, 117, 1);
            border-bottom: px2vw(8px) solid #ffffff;
            transition: all .3s;
            cursor: pointer;

            &_active {
                border-bottom-color: #82a2fe;
            }
        }
    }

    .tab-body {
        margin-top: px2vw(54px);

        &-list {
            height: px2vw(126px);
            font-size: px2vw(42px);
            font-weight: 400;
            color: rgba(88, 88, 88, 1);
            white-space: nowrap;
            line-height: px2vw(126px);
            text-decoration: none;
            padding: 0 px2vw(48px);
            text-align: left;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
                width: px2vw(34px);
            }
        }
    }
</style>