<template>
    <div id="register">
       <header>
           <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?.inf-1&sv=449ce9ee" alt="" class="iconBack">
           <span>登录</span>
       </header>
       <div class="care">请保持手机通信流畅，便于接受验证码</div>
       <div class="num">
           <input type="text" name="" id="p_num" placeholder="请输入手机号码">
           <div class="pass">
               <input type="text" placeholder="请输入验证码"><span>获取验证码</span>
           </div>
           <div class="btn">下一步</div>
       </div>
   </div>
</template>
    
<script>
export default {
  name: "register",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
    header{
        height: 44px;
        line-height: 44px;
        font-size: 18px;
        position: relative;
        text-align: center;
        color: #000;
        border-bottom: 1px solid #e8e8e8;
    }
    .iconBack{
        width: 25px;
        position: absolute;
        left: .1rem;
        top: 10px;
    }
    .care {
        height: 60px;
        width: 100%;
        line-height: 60px;
        font-size: 12px;
        text-align: center;
        color:#999;
    }
    .num {
        width: 100%;
        margin: 0 auto;
        height: 185px;
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
        width: 90%;
        height: 48px;
        background: #dbdbdb;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 48px;
        margin: 20px auto 0 auto;
    }
</style>