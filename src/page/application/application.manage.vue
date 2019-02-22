<template>
    <div class="application">
        <ul>
            <li v-for="manage in applicationManage" v-bind:key="manage.title">
                <router-link :to="manage.link">
                    <img :src="manage.src" style="width:180px;height:180px;">
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
                title:'Onions1',
                src:require('../../assets/img/g3.png'),
                link:'',
            },{
                title:'Onions2',
                src:require('../../assets/img/g4.jpg'),
                link:'',
            },{
                title:'Onions3',
                src:require('../../assets/img/g6.jpg'),
                link:'',
            },{
                title:'Onions4',
                src:require('../../assets/img/g9.jpg'),
                link:'',
            },{
                title:'Onions5',
                src:require('../../assets/img/g10.jpg'),
                link:'',
            }]
        }
    }
})
</script>
