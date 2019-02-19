<template>
    <div class="application">
        <ul>
            <li v-for="(manage, index) in applicationManage" v-bind:key="index">
                <router-link :to="manage.link">
                    <img :src="manage.src">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default({
    data() {
        return {
            applicationManage:[{
                title:'平台设置',
                src:require('../../assets/img/g1.png'),
                link:'',
            },{
                title:'系统管理',
                src:require('../../assets/img/g2.png'),
                link:'system/organization',
            },{
                title:'平台设置',
                src:require('../../assets/img/g3.png'),
                link:'',
            },{
                title:'平台设置',
                src:require('../../assets/img/g4.png'),
                link:'',
            },{
                title:'平台设置',
                src:require('../../assets/img/g6.png'),
                link:'',
            },{
                title:'平台设置',
                src:require('../../assets/img/g9.png'),
                link:'',
            },{
                title:'平台设置',
                src:require('../../assets/img/g10.png'),
                link:'',
            },{
                title:'平台设置',
                src:require('../../assets/img/g11.png'),
                link:'',
            },{
                title:'平台设置',
                src:require('../../assets/img/g13.png'),
                link:'',
            }]
        }
    }
})
</script>
