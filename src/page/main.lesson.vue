<template>
    <div class="contentMain">
        <div class="lesson_main">
            <ul class="lesson_main_navs">
                <li v-for="nav in lessonNav">
                    <router-link :to="nav.link" class="lesson_nav_a">
                        <span class="size16">{{nav.title}}</span>
                        <span class="size12 marT6">{{nav.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lessonNav:[{
                title:'COURSE',
                name:'COURSE ONLINE',
                link:'/lesson/onlineCourse',
            },{
                title:'CLASS',
                name:'CLASS CURRICULUM',
                link:'/lesson/classCurriculum',
            },{
                title:'QUALITY',
                name:'QUALITY COURSE',
                link:'/lesson/qualityCourse',
            }]
        }
    }
}
</script>
<style lang="scss">
    @import "../style/scss/main.lesson";
</style>
