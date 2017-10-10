<template>
    <div id="cart">
       <div class="top">购物车<span>编辑</span></div>
       <div class="empty">
         <img src="https://jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png">
         <p>看到喜欢的就带回家吧</p>
         <a href="#/today">今日推荐</a>
       </div>
    </div>
</template>
 
<script>
export default {
  name: "cart",
  data () {
    return {
      
    };
  }
}
</script>
 
<style lang="css" scoped>
 #cart{
   height: 100%;
   background: #f4f4f8;
 }
 .top{
   height: 44px;
   background-color: #fff;
   font-size: 18px;
   line-height: 44px;
   text-align: center ;
   color: #333;
   position: relative;
 }
 .top span {
   position: absolute ;
   font-size: 15px;
   right: .15rem;
   top: 0 ;
 }
 .empty{
   text-align: center;
 }
 .empty img{
   width: 140px;
   margin: 20px 0 ;
 }
 .empty p{
   font-size: 16px;
   color: #333;
 }
 .empty a{
   display: inline-block;
    width: 138px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: #ff464e;
    border: 1px solid currentColor;
    margin: 20px 0 0 0 ;
 }
</style>