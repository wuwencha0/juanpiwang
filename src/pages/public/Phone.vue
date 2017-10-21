<template>
    <div id="count">
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
  name: "count",
  data () {
    return {
        
    };
  }
}
</script>
    
<style lang="css" scoped>
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
</style>