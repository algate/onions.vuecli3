<template>
    <div class="application">
        <ul>
            <li v-for="(manage, index) in applicationManage" v-bind:key="index">
                <router-link :to="manage.link">
                    <img :src="manage.src" style="width:100px;height:100px;">
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
                title:'Onions',
                src:require('../../assets/img/g1.png'),
                link:'',
            },{
                title:'System',
                src:require('../../assets/img/g2.png'),
                link:'system/organization',
            },{
                title:'Onions',
                src:require('../../assets/img/g3.png'),
                link:'',
            },{
                title:'Onions',
                src:require('../../assets/img/g4.jpg'),
                link:'',
            },{
                title:'Onions',
                src:require('../../assets/img/g6.jpg'),
                link:'',
            },{
                title:'Onions',
                src:require('../../assets/img/g9.jpg'),
                link:'',
            },{
                title:'Onions',
                src:require('../../assets/img/g10.jpg'),
                link:'',
            }]
        }
    }
})
</script>
