<template>
    <div class="login">
        <input type="text" placeholder="请输入用户名"><br/>
        <input type="text" placeholder="请输入密码"><br/>
        <button>登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style scoped lang="">
.login{
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
input{
    width: 80%;
    height: 30px;
    outline: none;
    margin:10px 0 10px 35px;
    border:none;
    border-bottom:1px solid #ccc;
}
button{
    width: 80%;
    height: 50px;
    background: red;
    color:#fff;
    margin-left:35px;
    border:none;
}
</style>