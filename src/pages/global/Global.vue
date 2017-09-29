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
          <img :src="list[0].pic" :title="list[0].title"/>
        </div>
        <div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="shop swiper-slide" v-for="(item,index) in list5" :key="item.id">
                <div><img :src="item.pic_url" alt=""></div>
                <div class="price">￥{{ item.cprice }} <span class="sale-price">￥{{item.oprice}}</span></div>
                <p>{{ item.title }}</p>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

          <div class="banner">
            <div class="sale">
              <p>满90元</p>
              <p>减10元</p>
            </div>
            <img :src="list[1].pic">
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="shop swiper-slide" v-for="(item,index) in list3" :key="item.id">
                <div><img :src="item.pic_url" alt=""></div>
                <div class="price">￥{{ item.cprice }} <span class="sale-price">￥{{item.oprice}}</span></div>
                <p>{{ item.title }}</p>
              </div>
            </div>
            
          </div>

          <div class="banner">
            <div class="sale">
              <p>满90元</p>
              <p>减10元</p>
            </div>
            <img :src="list[2].pic">
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="shop swiper-slide" v-for="(item,index) in list4" :key="item.id">
                <div><img :src="item.pic_url" alt=""></div>
                <div class="price">￥{{ item.cprice }} <span class="sale-price">￥{{item.oprice}}</span></div>
                <p>{{ item.title }}</p>
              </div>
            </div>
            
          </div>
          <div class="banner">
            <div class="sale">
              <p>满90元</p>
              <p>减10元</p>
            </div>
            <img :src="list[3].pic">
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="shop swiper-slide" v-for="(item,index) in list2" :key="item.id">
                  <div><img :src="item.pic_url" alt=""></div>
                  <div class="price">￥{{ item.cprice }} <span class="sale-price">￥{{item.oprice}}</span></div>
                  <p>{{ item.title }}</p>
              </div>
            </div>
          </div>

          <div class="banner">
            <div class="sale">
              <p>满90元</p>
              <p>减10元</p>
            </div>
            <img :src="list[4].pic">
          </div>
          
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="shop swiper-slide" v-for="(item,index) in list6" :key="item.id">
                    <div><img :src="item.picurl" alt=""></div>
                    <div class="price">￥{{ item.cprice }} <span class="sale-price">￥{{item.oprice}}</span></div>
                    <p>{{ item.title }}</p>
                </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="dibu"></div>
    </div>
    
</template>
 
<script>
import Vue from 'Vue'
export default {
  name: "global",
  data () {
    return {
       url:"./././static/ajax_data/data/global-02.json",
       url2:"./././static/ajax_data/data/global-healthCare.json",
       url3:"./././static/ajax_data/data/global-baby.json",
       url4:"./././static/ajax_data/data/global-beauty.json",
       url5:"./././static/ajax_data/data/global-food.json",
       url6:"./././static/ajax_data/data/global-goods.json",
       list:[{pic:''},{pic:''},{pic:''},{pic:''},{pic:''},{pic:''}],
       list2:[{pic:''}],
       list3:[{pic:''}],
       list4:[{pic:''}],
       list5:[{pic:''}],
       list6:[{pic:''}]
    };
  },
  created(){
    this.$http.get(this.url).then(res=>{
      this.list = res.data.data.banner_ads;
    },err=>{
      console.log(err);
    });
    this.axios.get(this.url2).then(res=>{
      this.list2 = res.data.list;   
    },err=>{
      console.log(err);
    });
    this.axios.get(this.url3).then(res=>{
      this.list3 = res.data.list;   
    },err=>{
      console.log(err);
    });
    this.axios.get(this.url4).then(res=>{
      this.list4 = res.data.list;   
    },err=>{
      console.log(err);
    });
    this.axios.get(this.url5).then(res=>{
      this.list5 = res.data.list;   
    },err=>{
      console.log(err);
    });
    this.axios.get(this.url6).then(res=>{
      this.list6 = res.data.data;   
    },err=>{
      console.log(err);
    });
  },
  updated(){
  //获取数据
      Vue.nextTick(function(){
        //导航
          var mySwiper1 = new Swiper('#global .swiper-container', {
            slidesPerView: 4,
            freeMode: true,
            spaceBetween: 5,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
            observer:true
          }) ;
      });
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
   margin-bottom: .1rem;
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
 .dibu{
  clear: both;
  height: 0.5rem;
  width:100%;
}
</style>