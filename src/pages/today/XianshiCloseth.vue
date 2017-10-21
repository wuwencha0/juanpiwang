<template>
   <div id="xianshiqiangCloseth">
     <div class="banner">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img class="sc-keVrkP idBkAx" src="https://goods2.juancdn.com/goods/170909/2/1/59b390daa9fcf83ba403e3b9_800x800.jpg?imageMogr2/quality/88!/format/jpg"></div>
                  <div class="swiper-slide"><img class="sc-keVrkP idBkAx" src="https://goods6.juancdn.com/goods/170909/a/6/59b3938ca9fcf83a745b8324_800x800.jpg?imageMogr2/quality/88!/format/jpg"></div>
                  <div class="swiper-slide"><img class="sc-keVrkP idBkAx" src="https://goods2.juancdn.com/goods/170909/3/5/59b3916ea9fcf8356d364b00_800x800.jpg?imageMogr2/quality/88!/format/jpg"></div>
                  <div class="swiper-slide"><img class="sc-keVrkP idBkAx" src="https://goods2.juancdn.com/goods/170909/2/9/59b3916ea9fcf83b915958d9_800x800.jpg?imageMogr2/quality/88!/format/jpg"></div>
                  <div class="swiper-slide"><img class="sc-keVrkP idBkAx" src="https://goods2.juancdn.com/goods/170909/3/5/59b3916ea9fcf8356d364b00_800x800.jpg?imageMogr2/quality/88!/format/jpg"></div>
                  <div class="swiper-slide"><img class="sc-keVrkP idBkAx" src="https://goods1.juancdn.com/goods/170909/1/a/59b39425a9fcf83c500ac1b7_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=jpg"></div>

              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination">34567</div>
          </div>
          <!-- <h2>{{currentGood}}</h2> -->
          <div class="listFenlei">
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div class="listFen">
            <div class="trg"></div>
            <div>
              <ul>
                <li class="shouye"><span><img src="../../assets/shouye.png" ></span>首页</li>
                <li class="shoucang"><span><img src="../../assets/shoucang.png" ></span>我的收藏</li>
                <li class="dingdan"><span><img src="../../assets/dingdan.png" ></span>我的订单</li>
              </ul>
            </div>
          </div>
     </div>
     <section class='pri'>
       <div class="priMain">
          <div class="tianjia"><img src='../../assets/collect.f8400f03.png'></div>
          <p class="price"><span class="xprice">￥16.9 </span> <span class="oprice">￥88</span></p>
          <p>距结束：已结束</p>
          <h3>秋季修身小脚裤</h3>
          <ul>
            <li><span><img src='../../assets/baoyou.780d8dab.png'></span>包邮</li>
            <li><span><img src='../../assets/person.50c02f25.png'></span>17371已购</li>
            <li><span><img src='../../assets/address.7a3cdc69.png'></span>浙江金华</li>
          </ul>
       </div>
     </section>
     <div class="jianju"></div>
     <div class="kaika">
       <div class="kaikajian">
         <span class="vip">VIP</span>
          开卡可节省1.69元，再送超值大礼包
       </div>
       <div class="shouhou">
         <ul> 
           <li><span></span> 24小时发货</li>
           <li><span></span> 七天包退</li>
           <li><span></span> 售后补贴</li>
         </ul>
         <img class="sc-imABML dkHulM" src="../../assets/more.66830346.png">
       </div>
     </div>
     <div class="jianju"></div>
     <div class="kaikajian" style="font-size:16px;">
        已选择：<span>黑色 </span> <span> M</span>
      </div>
      <div class="jianju"></div>
      

      


   </div>
</template>
<script>
import Vue from 'vue'

export default {
  name: "today",
  data () {
    return {
     
    };
  },
  mounted(){
    //获取数据
    Vue.nextTick(function(){
        //轮播图
        var swiper = new Swiper('#xianshiqiangCloseth .banner .swiper-container', {
            loop:false,
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observer: true

        }); 
    }); 
 },
 computed:{
   currentGood(){
     console.log(this.$store.state.current_good)
     return this.$store.state.current_good
   }
 }
}
</script>
 
<style lang="css" scoped>

/*  -----banner------ */
.banner{
  position: relative;
}
#xianshiqiangCloseth .banner{
  width: 100%;
  height: 3.6rem;
}
#xianshiqiangCloseth .banner img{
    width:100%;
    vertical-align: top;
}
.banner .listFenlei{
  width: 0.29rem;
  height: 0.29rem;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  z-index: 2;
  border-radius: 50%;
  line-height: 0.29rem;
  text-align: center;
}
.banner .listFenlei span{
  display: inline-block;
  width: 4px;
  height: 4px;
  background: rgba(256,256,256,0.8);
  margin: 0 0.01rem;
}
.listFen{
  height: 1.05rem;
  width: 1.15rem;
  background:  rgba(0, 0, 0, 0.7);
  position: absolute;
  right: 0.02rem;
  top: 0.52rem;
  z-index: 3;
  /* display: none; */
}
.listFen li{
  color: #fff;
  border-bottom: 1px solid rgba(256,256,256,0.5);
  width: 0.96rem;
  height: 0.35rem;
  line-height: 0.35rem;
  margin:0 auto;
  font-size: 14px;  
  /* text-indent: 0.3rem; */
}
.listFen span{
  display: inline-block;
  width: 0.20rem;
  height: 0.20rem;
  vertical-align: middle;
  margin-right: 0.05rem;
}
.listFen li:last-of-type{
  border-bottom: none;
}
.listFen .trg{
  position: absolute;
  top: -0.15rem;
  right: 0.15rem;
  border: 0.08rem solid transparent;
  border-bottom: 0.08rem solid rgba(0, 0, 0, 0.7);
}
/* .banner .listFenlei:hover .listFen{
  display: block;
} */
/* ---------------------- */
.pri{
  width:100%;
  height: 1.22rem;
  color: #9d9d9d;
  position: relative;
}
.priMain{
  width: 100%;
  height: 100%;
  padding:0 0.13rem 0.1rem;
}
.price{
  margin: 0.1rem 0 0.1rem 0;
}
.xprice{
  color: #ff464e;
  font-size: 19px;
}
.oprice{
  text-decoration: line-through;
  color: #9d9d9d;
}
.pri h3{
  font-size: 16px;
  margin: 0.1rem 0 0.1rem 0;
  color: #6e6e6e;
}
.pri ul{
 /* margin-top: 0.28rem; */
  height: 0.16rem;
  width:100%;
  display: flex;
 justify-content: space-between;
}
.pri ul span{
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
}
.tianjia{
  height: 0.23rem;
  width: 0.23rem;
  position: absolute;
  right: 0.13rem;
  top: 0;
}
.jianju{
    height: 8px;
    background: #f4f4f8;
}
/* -------------kaika------- */
.kaika{
  height: 0.92rem;
  width:100%;
}
.kaikajian{
  width:3.33rem;
  height: 0.46rem;
   line-height: 0.46rem;
  margin: 0 auto;
  color: #333333;
  background: url(../../assets/arrow_right.ddbb0258.png) no-repeat right center/0.24rem;
}
.vip{
  color:#f00;
  width:0.25rem;
  height: 0.18rem;
  border: 1px solid #f00;
  padding: 0.01rem 0.02rem;
  margin-right: 0.02rem;
}
.shouhou{
  width:3.33rem;
  height: 0.46rem;
  margin: 0 auto;
   line-height: 0.46rem;
   position: relative;
}
.shouhou li{
  float: left;
  margin-right: 0.1rem;
}
.shouhou li span{
  display: inline-block;
  margin-bottom: 0.02rem;
  margin-right: 0.02rem;
  width: 2px;
  height: 2px;
  background: #f00;
}
.shouhou img{
  position: absolute;
  right: 0;
  top: 0.17rem;
  width: 0.23rem;
  height: 0.23rem;
}
</style>