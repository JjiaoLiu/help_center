<template>
    <div id="app">
        <Header msg="帮助中心" :to-andriod='true'/>
        <section class="nav">
            <router-link to="/list/employee" style="text-decoration: none">
                <img alt="avater_employee" src='./../assets/avater_employee.png' class="avater"/>
                <div class="type">我是雇员</div>
            </router-link>
            <router-link to="/list/employer" style="text-decoration: none">
                <img alt="avater_employer" src='./../assets/avater_employer.png' class="avater"/>
                <div class="type">我是雇主</div>
            </router-link>
        </section>
    </div>
</template>
<script>
    import Header from "@/components/Header";

    export default {
        name: 'Index',
        components: {Header},
        created() {
            this.$store.commit('setActivateTab', 0)
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/mixin";

    .nav {
        display: flex;
        justify-content: space-between;
        padding: px2vw(279px) px2vw(165px) 0;
        align-items: center;

        a {
            display: inline-block;
        }
    }

    .avater {
        width: px2vw(255px);
    }

    .type {
        font-size: px2vw(48px);
        color: rgba(40, 40, 40, 1);
        line-height: px2vw(67px);
        margin-top: px2vw(63px);
        text-align: center;
    }
</style>
