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
                title:'JS',
                link:'organization',
            },{
                title:'ES6',
                link:'teacher',
            },{
                title:'TS',
                link:'student',
            },{
                title:'Deepin',
                link:'role',
            },{
                title:'Redux',
                link:'class',
            }]
        }
    }
}
</script>
