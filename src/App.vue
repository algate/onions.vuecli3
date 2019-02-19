<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
      @import "./style/style";
</style>
<script>
import loginService from './config/services/login.service'
export default {
    name: 'app',
    data(){
        return {}
    },
    created () {
        // this.login({ username: 'admin', password: '123456'})
    },
    methods:{
        login(params){
            let v = this;
            loginService.login(params).then(function(r){
                if(r.data.success == 0){
                    v.$store.commit('Globaluser',r.data);
                    v.$router.push({path:'/home'});
                }
            });
        }
    }
}
</script>
