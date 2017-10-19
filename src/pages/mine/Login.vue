<template>
    <div id="login">
       <header>
           <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=a8351a1e" alt="" class="iconBack">
           <span>登录</span>
           
       </header>
    </div>
</template>
 
<script>
export default {
  name: "login",
  data () {
    return {
  
    };
  }
}
</script>
 
<style lang="css" scoped>
    header{
        height: 44px;
        background: linear-gradient(150deg,#ff5a61 50%,#fd631c);
        line-height: 44px;
        font-size: 18px;
        position: relative;
        text-align: center;
        color: #fff;
    }
    .iconBack{
        width: 25px;
        position: absolute;
        left: .1rem;
        top: 10px;
    }
</style>