<template>
    <div id="login">
       <header>
           <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=a8351a1e" alt="" class="iconBack" @click="back">
           <span>登录</span>
           <span id="register"><router-link to="/register">注册</router-link></span>
       </header>
       <div id="loading">
           <ul>
               <li :class="{active: act}"><router-link to="/login/count">卷皮网账号登录</router-link></li>
               <li :class="{active: !act}"><router-link to="/login/phone">手机快速登录</router-link></li>
           </ul>
           <router-view></router-view>
           <p><label><input type="checkbox">两周内免登陆</label> <span>忘记密码？</span></p>
       </div>
       <div class="other">
           <p>第三方账号快速登录</p>
           <div class="icon">
               <span><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee" alt=""></span>
               <span><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee" alt=""></span>
               <span><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee" alt=""></span>
           </div>
       </div>
       <ul class="sevice">
           <li><span><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt=""></span>全场包邮</li>
           <li><span><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt=""></span>100%人工质检</li>
           <li><span><img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt=""></span>七天包换</li>
       </ul>
       </div>
    </div>
</template>
 
<script>
export default {
  name: "login",
  data () {
    return {
  
    };
  },
  computed: {
      act () {
          return this.$route.path.indexOf('phone') == -1;
      }
  },
  methods: {
      back () {
          window.history.back(-1);
      }
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
    header a{
        color: #fff;
    }
    .iconBack{
        width: 25px;
        position: absolute;
        left: .1rem;
        top: 10px;
    }
    #register {
        width: 50px;
        position: absolute;
        height: 100%;
        display: block;
        right: .1rem;
        top: 0;
        font-size: 16px;
    }
    #loading {
        width: 90%;
        margin: 0 auto;
        padding-bottom: 52px;
    }
    #loading ul{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    #loading ul li {
        width: 30%;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 14px;
        color: #999;
    }
    .active {
        color: #ff464e;
        border-bottom: 2px solid #ff464e;
    }
    .num {
        width: 100%;
        margin: 0 auto;
        height: 170px;
        display: flex;
        flex-direction: column;
    }
    #p_num {
        width: 90%;
        height: 48px;
        line-height: 48px;
        outline: 0;
        border: 0;
        border-bottom: 1px solid #f3e9e9;
        display: block;
        margin: 0 auto;
    }
    .pass {
        width: 90%;
        margin: 0 auto;
         height: 48px;
        line-height: 48px;
        outline: 0;
        border: 0;
        border-bottom: 1px solid #f3e9e9;
        display: flex;
        justify-content: space-between;
    }
    .pass input {
        height: 45px;
        outline: 0;
        border: 0;
    }
    .pass span {
        color: #999;
        font-size: 14px;
    }
    .btn {
        width: 100%;
        height: 48px;
        background: #dbdbdb;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 48px;
        margin: 20px auto 0 auto;
    }
    #loading p {
        display: flex;
        justify-content: space-between;
        color: #c2c2c2;
        
    }
    .other p {
        text-align: center;
        line-height: 36px;
        margin-bottom: 30px;
        color: #c2c2c2;
    }
    .icon {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 80%;
        margin: 0 auto 20px auto;
    }
    .icon span{
        width: 48px;
    }
    .sevice {
        display: flex;
        flex-direction: row;
        padding-top: 10px;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
        border-top: 1px solid #c2c2c2;
        color: #c2c2c2;
    }
    .sevice img {
        width: 22px;
        height: 22px;
    }
</style>