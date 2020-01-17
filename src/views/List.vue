<template>
    <section>
        <Tabs :data="data"/>
    </section>
</template>
<script>
    import Header from "../components/Header";
    import Tabs from "../components/Tabs";

    const employee = {
        header: ['新手指引', '求职咨询', '帮助小能手'],
        body: [
            [{title: '怎么找兼职信息？怎么快速找到自己需要的信息？', id: 10},
                {title: "兼职信息是否靠谱？", id: 11},
                {title: "每天有多少次报名机会？", id: 12},
                {title: "怎么填写简历？", id: 13},
                {title: "找兼职工作要付押金吗？", id: 14},
                {title: "怎么没有所在城市？", id: 15},
                {title: "有没有网上或者在家手机兼职？", id: 16},
                {title: "注册时未设置密码，怎么修改密码？", id: 17}],
            [{title: '怎么联系雇主？', id: 20},
                {title: "怎么取消报名？取消后可以再报吗？", id: 21},
                {title: "到岗需要打卡签到吗？", id: 22},
                {title: "雇员报名成功后，但未到岗？", id: 23},
                {title: "工资如何结算？", id: 24},
                {title: "怎么得知自己被录用？录用后不想去怎么办？", id: 25},
                {title: "已结算时提示的工资跟之前说好的不一致怎么办？", id: 26}],
            [{title: '客服电话多少？', id: 40},
                {title: "钱包的提现限额是多少？", id: 41},
                {title: "怎么提现？最低多少提现？多久到账？", id: 42},
                {title: "雇员报名成功后，但未到岗？", id: 43},
                {title: "注册时未设置密码，怎么修改密码？", id: 44}],
        ],
        title: '雇员帮助中心'
    };
    const employer = {
        header: ['招聘指南', '帮助小能手'],
        body: [
            [{title: '发布岗位之前有什么要求吗？', id: 30},
                {title: "企业认证后可以修改吗？", id: 31},
                {title: "怎么发布岗位？", id: 32},
                {title: "发布兼职信息收费吗？", id: 33},
                {title: "为什么岗位无法发布出去？", id: 34},
                {title: "岗位审核时间多久？", id: 35},
                {title: "怎么修改已经成功发布的信息？是否可以撤回？", id: 36},
                {title: "如何联系已报名的雇员？", id: 37}, {title: "如何让雇员进行到岗签到？", id: 38}, {title: "如何进行结算？", id: 39}],
            [{title: '客服电话多少？', id: 40},
                {title: "钱包的提现限额是多少？", id: 41},
                {title: "怎么提现？最低多少提现？多久到账？", id: 42},
                {title: "雇员报名成功后，但未到岗？", id: 43},
                {title: "注册时未设置密码，怎么修改密码？", id: 44}],
        ],
        title: '雇主帮助中心'
    };
    export default {
        name: 'List',
        components: {Header, Tabs},

        data() {
            return {
                activate: 0,
                data: this.$route.params.type === 'employee' ? employee : employer,
            }
        },
    }
</script>
