<template>
   <div id="shangxin">
      <div class="banner">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <!-- <div class="swiper-slide"><img src="https://goods8.juancdn.com/jas/170924/e/a/59c70c018150a1382b327cc6_1080x418.png?imageMogr2/thumbnail/750x290!/quality/80!/format/png"></div>
                  <div class="swiper-slide"><img src="https://goods8.juancdn.com/jas/170924/f/5/59c70bb08150a139312b8b46_1080x418.png?imageMogr2/thumbnail/750x290!/quality/80!/format/png"></div>
                  <div class="swiper-slide"><img src="https://goods8.juancdn.com/jas/170924/e/a/59c70c018150a1382b327cc6_1080x418.png?imageMogr2/thumbnail/750x290!/quality/80!/format/png"></div>
                  <div class="swiper-slide"><img src="https://goods4.juancdn.com/jas/170920/7/1/59c1c0baa9fcf83c4773cd61_1080x418.png?imageMogr2/thumbnail/750x290!/quality/80!/format/png"></div>
                  <div class="swiper-slide"><img src="https://goods8.juancdn.com/jas/170924/e/a/59c70c018150a1382b327cc6_1080x418.png?imageMogr2/thumbnail/750x290!/quality/80!/format/png"></div> -->
                   <div class="swiper-slide" v-for="(item, index) in banner" :key="item.id"><img :src="item.pic" /> </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
          </div>
      </div>
      <!-- 首页接入模块广告 -->
      <div class="moudle-ad">
          <div class="jianju"></div>
          <div class="col">
              <ul>
                    <li><a href = ""> <img src="https://goods8.juancdn.com/jas/170828/e/7/59a3f55e8150a1637e478d48_270x267.png?imageMogr2/quality/85!/format/png"></a></li>
                  <li><img src="https://goods8.juancdn.com/jas/170809/e/8/598a7504a9fcf866ab51bcfe_270x267.png?imageMogr2/quality/85!/format/png"></li>
                  <li><img src="https://goods4.juancdn.com/jas/170828/7/1/59a3f5768150a16da3399c8f_270x267.png?imageMogr2/quality/85!/format/png"></li>
                  <li><img src="https://goods1.juancdn.com/jas/170906/1/c/59af976b8150a15198156939_270x267.png?iopcmd=convert&amp;Q=85&amp;dst=webp"></li>
              </ul>
          </div>
          <div class="jianju"></div> 
          <div class="limit">
              <div class="limitLeft">
                  <router-link to="/xianshiqiang"> <img class="lazy loaded" src="https://goods3.juancdn.com/jas/170922/4/7/59c4f3c3a9fcf80adf606512_540x656.png?iopcmd=convert&amp;Q=85&amp;dst=webp"></router-link>
                  <p>
                      <span>00</span>
                      <b>:</b>
                      <span>00</span>
                      <b>:</b>
                      <span>00</span>
                  </p>
              </div>
              <div class="limitRight">
                  <img class="lazy loaded" src="https://goods5.juancdn.com/jas/170921/8/9/59c3b17fa9fcf8ada7555706_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=webp">
                  <img class="lazy loaded" src="https://goods5.juancdn.com/jas/170920/8/e/59c25946a9fcf8074830d76e_540x328.png?iopcmd=convert&amp;Q=85&amp;dst=webp">
              </div>
          </div>
          <div class="jianju"></div>
          <div class="motion">
              <img class="lazy loaded" src="https://goods6.juancdn.com/jas/170920/a/c/59c256a68150a10f1f02c1e1_270x360.png?imageMogr2/quality/85!/format/png">
              <img class="lazy loaded" src="https://goods3.juancdn.com/jas/170920/5/5/59c256e18150a10e787b2434_270x360.png?iopcmd=convert&amp;Q=85&amp;dst=webp">
              <img class="lazy loaded" src="https://s2.juancdn.com/jas/170920/0/3/59c256fb8150a10ee71f22cf_270x360.gif">
              <img class="lazy loaded" src="https://goods7.juancdn.com/jas/170920/c/9/59c25736a9fcf8b19540fccc_270x360.png?iopcmd=convert&amp;Q=85&amp;dst=webp">
          </div>
          <div class="jianju"></div>
          <div class="every">
            <img class="lazy loaded" src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&amp;Q=85&amp;dst=webp">
          </div>
          <main>
            <ul>
                <li v-for="(item, index) in main" :key="item.id">
                    <a href="">
                        <div class="clothes">
                            <img class="lazy loaded" :src="item.pic_url" alt="骆汐女装清仓专场">
                            <div class="shop-logo">
                                <img class="lazy loaded" :src="item.shop_logo">
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="miaoshu">
                           <div class="price"><span class="pricejia">{{manjian[index] | manji1}}</span> <span class="oldPrice"> {{manjian[index] | manji2}}</span></div>
                            <div class="zhuanchang"><span class="shangxin">{{ item.residue }}</span><h3>{{ item.title }}</h3></div>
                        </div>
                    </a>
                </li>
                
            </ul>
        </main>

      </div>

      <!-- 底部距离 -->
      <div class="dibu"></div>
   </div>
</template>
 

<script>

import Vue from 'vue'

export default {
  name: "today",
  data () {
    return {
        url: '../../../static/todayBanner.json',
        banner:[],
        url2: '../../../static/shangxinMain.json',
        main: [],
        manjian: []
    };
  },
  updated(){
    //获取数据
    Vue.nextTick(function(){
        //轮播图
        var swiperB = new Swiper('.banner .swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop:true,
            autoplayDisableOnInteraction: false,
            autoplay: 1000//可选选项，自动滑动
        }); 
    });
 },
 created(){
     this.axios.get(this.url).then(res => {
            // console.log(res.data);
            this.banner = res.data;
        }, res => {
            console.log(err);
        });
        this.axios.get(this.url2).then(res => {
            // console.log(res.data);
            this.main = res.data;
           for(var i of res.data){
                if(!i.coupon){
                    this.manjian.push({cprice: i.cprice, oprice: i.oprice, iscut: 1});
                    continue;
                }
                this.manjian.push(i.coupon.rules);
           }
            // console.log(this.manjian);
        }, res => {
            console.log(err);
        })
    },
    filters: {
        manji1(item){
            if(item.iscut){
                return '¥' + item.cprice
            }else{
                return item[0].aeBankInfo;
            }
        },
        manji2(item){
            if(item.iscut){
                return '¥' + item.oprice
            }else{
                return ''
            }
        }
    }
}
</script>
 
<style lang="css" scoped>

/*  -----banner------ */
#shangxin .banner{
    height: 1.40rem;
    width: 100%;
}
#shangxin .banner img{
    width:100%;
    vertical-align: top;
}
#shangxin .banner .swiper-pagination-bullet{
    width: 0.05rem;
    height: 0.05rem;
}
#shangxin .banner .swiper-pagination-bullet-active{
    background: #fff;
}
/*  ---    -moudle-ad------------- */
.moudle-ad{
    width: 100%;
    height: 5.13rem;
}
.swiper-container1{
    width:100%;
}
.col{
    width: 100%;
    height: 0.89rem;
}
.col li{
    width:25%;
    height: 0.89rem;
    float: left;
}
.col li img{
    width:100%;
    vertical-align: middle;
}
.jianju{
    height: 8px;
    background: #f4f4f8;
}
.limit{
    height: 2.18rem;
    width: 100%;
    position: relative;
}
.limitLeft{
    width: 50%;
    height:2.18rem;
    float: left;
    border-right: 1px solid #ebebeb;
}
.limitRight{
    width: 50%;
    height: 2.18rem;
    float: left;
}
.lazy{
    width: 100%;
    vertical-align: middle;
}
.limitRight img:first-of-type{
    border-bottom: 1px solid #ebebeb;
}
.limitLeft p{
    position: absolute;
    left: 0.1rem;;
    top:0.45rem;;
}
.limitLeft p span{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    line-height: 0.2rem;
    text-align: center;
    color: #fff;
    background: #333;
    border-radius: 2px;
}
.motion{
    width: 100%;
    height: 1.2rem;
}
.motion .lazy{
    width:25%;
    float: left;
}
.every{
    width: 100%;
    height: 0.46rem;
  }
  /*  ------main------ */
main{
    clear: both;
    width:100%;
}
main li{
    width: 50%;
    height: 2.37rem;
    float: left;
    position: relative;
}
main li:nth-of-type(odd):after{
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -1px;
    background: #fff;
    z-index: 5;
    content:"";
}
main li>a{
    display: block;
}
.shop-logo{
    width: 0.48rem;
    height: 0.24rem;
    background: #fff;
    position: absolute;
    bottom:-0.12rem;
    right: 0.1rem;
}
.clothes{
    height:1.80rem;
    width: 1.80rem;
    position: relative;
}
main .price{
   width: 90%;
   height: 0.24rem;
   line-height: 0.24rem;
   margin: 0 auto;
   color: #ff464e;
   font-size: 0.13rem;
}
main .oldPrice{
    font-size: .11rem;
    color: #bbb;
    text-decoration: line-through; 
}
.zhuanchang{
    width:90%;
    margin: 0 auto;
    height: 0.20rem;
    line-height: 0.20rem;
}
.zhuanchang h3{
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.13rem;
}
.zhuanchang .shangxin{
   float: right;
   color: #bbb;
}
/* ------底部- */
.dibu{
  clear: both;
  height: 0.6rem;
  width:100%;
}

</style>