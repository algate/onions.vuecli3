<template>
    <div class="contentMain">
        <div class="application_main">
            <ul class="navs-level">
                <li v-for="nav in applicationNav" class="btn-level" v-bind:key="nav.title">
                    <router-link :to="nav.link">
                        <i :class="nav.icon"></i>
                        <span>{{nav.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    @import "../style/scss/main.application";
</style>
<!-- 动态组件 -->
<!-- Vue 还可以将多个子组件，都挂载在同一个位置，通过变量来切换组件，实现 tab 菜单这样的效果
这样的功能可以通过路由 vue-router 实现，但路由更适合较大的组件，而且 url 会有相应的改变
当 tabView 的值改变，<component> 就会渲染对应的组件，和路由的效果十分类似，但是地址栏并没有发生改变
但这样一来，每次切换组件都会重新渲染，无法保留组件上的数据。这时可以使用 keep-alive 将组件保留在内存中，避免重新渲染-->
<script>
export default {
    data() {
        return {
            applicationNav:[{
                title:'录播应用',
                icon:'icon_luke',
                link:'/application/record',
            },{
                title:'教学应用',
                icon:'icon_jiaoxue',
                link:'/application/teach',
            },{
                title:'管理应用',
                icon:'icon_guanli',
                link:'/application/manage',
            }]
        }
    }
}
</script>
