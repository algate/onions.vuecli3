<template>
    <header class="header o_h">
        <div style="width:900px;margin:0 auto;">
            <div class="logo f_l"><img src="../assets/img/Logo.png"></div>
            <ul class="nav">
                <li v-for="nav in navs" v-bind:key="nav.title">
                    <router-link :to="nav.link">
                        <i :class="nav.icon"></i>
                        <span>{{nav.title}}</span>
                    </router-link>
                </li>
            </ul>
            <div class="f_r" style="line-height:150px;height:150px;color:#fff;font-size:14px;">{{user.name?user.name:'Algate'}}</div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navs: [{
                title:'首页',
                icon:'icon_home',
                link:'/home'
            },
            {
                title:'用户空间',
                icon:'icon_user',
                link:'/userSpace'
            },
            {
                title:'课堂直播',
                icon:'icon_h_live',
                link:'/live'
            },
            {
                title:'课程中心',
                icon:'icon_h_lesson',
                link:'/lesson'
            },
            {
                title:'教研活动',
                icon:'icon_class',
                link:'/teaching'
            },
            {
                title:'平台应用',
                icon:'icon_application',
                link:'/application'
            }]
        }
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    }
}
</script>
<style lang="scss">
    @import "../style/scss/header";
</style>
