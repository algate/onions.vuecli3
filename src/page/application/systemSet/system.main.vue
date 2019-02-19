<template>
    <div class="contentMain">
        <div class="system_main">
            <ul class="navs-level">
                <li v-for="nav in systemSetNav" class="btn-level">
                    <router-link :to="nav.link">
                        <span>{{nav.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    @import "../../../style/scss/main.application";
</style>
<script>
export default {
    data() {
        return {
            systemSetNav:[{
                title:'机构管理',
                link:'organization',
            },{
                title:'教师管理',
                link:'teacher',
            },{
                title:'学生管理',
                link:'student',
            },{
                title:'角色管理',
                link:'role',
            },{
                title:'班级管理',
                link:'class',
            }]
        }
    }
}
</script>