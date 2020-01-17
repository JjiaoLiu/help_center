<template>
    <section class="list_id">
        <Header/>
        <div class="content">
            <h4>{{data.title}}</h4>
            <p v-html="data.content"></p>
        </div>
    </section>
</template>

<script>
    import Header from "../components/Header";

    export default {
        name: "ListId",
        components: {Header},
        data() {
            return {
                data: {}
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                fetch(`./json/${this.$route.params.id}.json`).then(response => response.json())
                    .then(data => this.data = data)
                    .catch(e => console.log("Oops, error", e))
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "./../assets/mixin";

    .content {
        padding: px2vw(42px) px2vw(48px);
    }

    h4 {
        font-size: px2vw(42px);
        font-weight: 400;
        color: rgba(88, 88, 88, 1);
        line-height: px2vw(59px);
        margin-bottom: px2vw(42px);
    }

    p {
        font-size: px2vw(39px);
        font-weight: 400;
        color: rgba(137, 137, 137, 1);
        line-height: px2vw(54px);
    }
</style>