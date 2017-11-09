<template>
   <div id="nvzhuang">
       
        <div class="moudleNav">
            <ul>
                <li v-for="(item, index) in listNv" :key="item.id"><img class="lazy loaded" :src="item.pic"></li>
            </ul>
            <div class="jianju"></div>
            <div class="gengxin">
                <img class="lazy loaded" src="https://goods1.juancdn.com/bao/170310/0/f/58c20db7a43d1f63427015d8_750x96.jpg?iopcmd=convert&amp;Q=85&amp;dst=webp">
            </div>
        </div>
        <main>
            <ul>
                <li v-for="(item, index) in main" :key="item.id">
                    <a href="">
                        <div class="clothes">
                            <img class="lazy loaded" v-lazy="item.pic_url" alt="骆汐女装清仓专场">
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

      <!-- 底部距离 -->
      <div class="dibu clearfixed"></div>
   </div>
</template>
 
<script>
export default {
    name: "today",
    data () {
        return {
            urls: {
                nvzhuang: ['../../../static/nvzhuangTab.json', '../../../static/nvzhuangMain.json'],
                xiebao: ['../../../static/xiebaoTab.json', '../../../static/xiebaoMain.json',],
                muying: ['../../../static/muyingTab.json', '../../../static/muyingMain.json'],
                shuma: ['../../../static/shumaTab.json', '../../../static/shumaMain.json'],
                jujia: ['../../../static/jujiaTab.json', '../../../static/jujiaMain.json'],
                nanshi: ['../../../static/nanshiTab.json', '../../../static/nanshiMain.json'],
                meizhuang: ['../../../static/meizhuangTab.json', '../../../static/meizhuangMain.json'],
                meishi: ['../../../static/meishiTab.json', '../../../static/meishiMain.json']
            }
        };
    },
    computed: {
        luyou(){
            return this.$route.params.class
        },
        listNv(){
            let dataType = this.luyou + 'Listnv'
            if (this.tools.isDataNull(this, dataType, this.urls[this.luyou][0])) return []
            return this.$store.state[dataType]
        },
        main(){
            let dataType = this.luyou + 'Main'
            if (this.tools.isDataNull(this, dataType, this.urls[this.luyou][1])) return []
            return this.$store.state[dataType]
        },
        manjian(){
            let arr = [];
            for(var i of this.main){
                if(!i.coupon){
                    arr.push({cprice: i.cprice, oprice: i.oprice, iscut: 1});
                    continue;
                }
                arr.push(i.coupon.rules);
            }
            return arr
        }
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
.nvheader{
    width:100%;
    height: 0.4rem;
    /* background: blue; */
    padding-top: 0.1rem;
    display: flex;
}
.juanpilogo{
    flex: 1 1 auto;
    width: 2.9rem;
    height: 0.3rem;
    /* background: yellow; */
    margin-left: 0.32rem;
}
.juanpilogo img{
    display: block;
    width: 0.48rem;
    height: 0.24rem;
    margin: 0 auto;
}
.list{
    width:0.42rem;
    height: 0.30rem;
    text-align: center;
    line-height: 0.30rem;
}
.list img{
    width:0.30rem;
    height: 0.30rem;
}

/*  ----nav---------- */
.nav{
    width: 100%;
    height: 0.38rem;
   font-size: 0.14rem;
    line-height: 0.38rem;
}
.nav .swiper-slide{
    text-align: center;
    height: 0.38rem;
}

.nav .active{
    border-bottom: 2px solid #ff464e;
}
.nav .activea{
    color: #FF464E;
}
/* -------moudleNav---------- */
.moudleNav{
    width:100%;
    height: 2.43rem;
}
.moudleNav li{
    width:25%;
    height: 0.95rem;
    float: left;
}
/* -------jianju----- */
.jianju{
    clear: both;
    height: 8px;
    background: #f4f4f8;
}
.gengxin{
    width:100%;
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