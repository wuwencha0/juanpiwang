<template>
    <div id="global">
       <header>
         <div>
           全球购
           <span></span>
         </div>
       </header>
       <div class="banner">
         <div class="sale">
           <p>满90元</p>
           <p>减10元</p>
         </div>
         <img src="https://goods3.juancdn.com/seller/170907/5/5/59b0c6678150a16ab172c319_750x350.jpg?iopcmd=convert&Q=88&dst=jpg" alt="">
       </div>
       <div class="conter">
         <div class="shop">
           <div><img src="https://goods4.juancdn.com/bao/170724/7/f/59757b67a9fcf85d3e1a1056_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt=""></div>
           <div class="price">￥198 <span class="sale-price">￥560</span></div>
           <p>美迪惠尔针剂补水套装</p>
         </div>
         <div class="shop">
           <div><img src="https://goods8.juancdn.com/bao/161213/f/6/584fb8f4db01d994118b4595_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt=""></div>
           <div class="price">￥52 <span class="sale-price">￥216</span></div>
           <p>美迪惠尔针剂补水套装</p>
         </div><div class="shop">
           <div><img src="https://goods2.juancdn.com/bao/170323/2/6/58d33323a43d1f2c50069194_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt=""></div>
           <div class="price">￥59 <span class="sale-price">￥199</span></div>
           <p>美迪惠尔针剂补水套装</p>
         </div>
       </div>
       <div class="swiper-container">
            <div class="swiper-wrapper">
              
            </div>
          </div>
    </div>
</template>
 
<script>
export default {
  name: "global",
  data () {
    return {
       url:"./ajax_data/data/global-01"
    };
  },
  created(){
    this.$http.get("url").then(res=>{
      console.log(res)
    },err=>{
      console.log(err);
    })
  }
}
</script>
 
<style lang="css" scoped>
 header{
   width: 100%;
   height: .44rem;
   color: #333;
   text-align: center;
   font-size: .18rem;
   line-height: .44rem;
 }
 header div{
   position: relative;
 }
 header div span{
   position: absolute;
   display: block;
   width: .24rem;
   height: .24rem;
   top: 0.12rem;
   right: 0.12rem;
   background: url("https://goods6.juancdn.com/bao/170411/b/5/58ecaeb3a43d1f5caf7c0d16_72x72.png") no-repeat;
   background-size: .24rem .24rem;
 }
 .banner{
   position: relative;
   width: 100%;
 }
 .banner img{
   width: 100%;
   vertical-align: middle;
 }
.banner .sale{
  width: 45px;
  position: absolute;
  top: 0;
  left: .2rem;
  text-align: center;
  color: white;
  background: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/icon/top-jiaobiao.png) no-repeat;
  background-size: 45px;
}
 .conter{
   padding-top: .1rem;
   height: 1.5rem;
   display: flex;
   flex-direction: row;
 }
 .shop{
   width: .9rem;
   height: 1.5rem;
   margin-left: .1rem;
   display: flex;
   flex-direction: column;
 }
 .shop img{
   width: 100%;
 }
 .shop .price{
   color: #60e;
   font-size: 14px;
   letter-spacing: -2px;
   text-align: center;
 }
 .shop .sale-price{
   color: #999;
   font-size: 12px;
   text-decoration: line-through;
 }
 .shop p{
   text-align: center;
   color:#666;
 }
</style>