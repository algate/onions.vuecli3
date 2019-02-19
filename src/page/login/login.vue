<template>
    <div id="login">
        <div class="login_title">
            <span>登&nbsp;&nbsp;录</span>
        </div>
        <div class="login_info">
            <input v-model="userName" placeholder="VUECLI3账号" type="text" />
            <input v-model="password" placeholder="密码" type="password" />
        </div>
        <div class="login_btn">
            <span @click="login">登&nbsp;&nbsp;录</span>
        </div>
        <div class="login_pwd">
            <span>忘记密码  ?</span>
        </div>
    </div>
</template>
<script>
import fetchApi from '_conf/services/fetch.services'
export default {
    data () {
        return  {
            userName : '',
            password : ''
        }
    },
    created () {
    },
    methods:{
        // 使用axios方法写法如下
        /* login(){
            let v = this;
            v.$axios.get(`mock/getUser.json`,{params:{username: 'admin', password: '123456'}}).then(function(r){
                console.log(r)
                if(r.status === 200){
                    v.$store.commit('Globaluser',r.data);
                    v.$router.push({path:'/home'});
                }
            })
        } */
        // 使用fetch方法请求接口如下
        login(params){
            let v = this;
            // loginService.login(params).then(function(r){
            fetchApi('mock/getUser.json','get',params).then(r => {
                // console.log(r)
                v.$store.commit('Globaluser',r);
                v.$router.push({path:'/home'});
            });
        }
    }
}
</script>

<style>
    #login .login_btn{
        display: flex;
        justify-content: center;
    }

    #login .login_btn span{
        cursor:pointer;
        width:120px;
        height:30px;
        display: flex;
        background: #00B4F0;
        font-size: .26rem;
        border-radius: .4rem;
        color: #FFFFFF;
        justify-content: center;
        align-items: center;
    }

    #login .login_pwd{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: flex-end;
    }

    #login .login_pwd span{
        font-size: .17rem;
        color: #333;
        margin-right: .5rem;
    }
</style>
