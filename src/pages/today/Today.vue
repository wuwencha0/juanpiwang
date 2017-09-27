<template>
   <div id="today">
      <header class="nvheader" v-if="!isShowTabBarFn()">
          <div class="juanpilogo"><img src="../../assets/top-logo.png"></div>
          <div class="list"><img src= "../../assets/list.png" ></div>
      </header>
      <header class="shangxinHeader">
        <div class="search"  v-if="isShowTabBarFn()">
            <span><img src = '../../assets/search.png'></span>
            <a class="search-input" href="" style="color:#999">搜索商品</a>
        </div>
        <!-- <div class="user" v-if="isShowTabBarFn()"><span></span></div>  -->
         <div class="list" v-if="isShowTabBarFn()"><img src= "../../assets/list.png" ></div>
      </header>
      <div class="nav">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- <div class="swiper-slide active"><router-link to="/today/shangxin"><a href="" class="activea">上新</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/nvzhuang"><a href="">女装</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/xiebao"><a href="">鞋包</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/muying"><a href="">母婴</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/shuma"><a href="">数码</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/jujia"><a href="">居家</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/nanshi"><a href="">男士</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/meizhuang"><a href="">美妆</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/meishi"><a href="">美食</a></router-link></div>
                <div class="swiper-slide"><router-link to="/today/jingpin"><a href="">精品服饰</a></router-link></div> -->
                <div class="swiper-slide" v-for="(item, index) in navList" :key="item.id"><router-link :to="'/today/' + item.navPage"><a href="">{{ item.navName }}</a></router-link></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
      </div>
       <router-view></router-view>
   </div>
</template>
 
<script>
//导入List
// import List from '../../components/List'

import Vue from 'vue'

export default {
  name: "today",
    data () {
        return {
            // navPage:['shangxin', "nvzhuang", "xiebao", "muying", "shuma", "jujia", "nanshi", "meizhuang", "meishi", "jingpin"],
            navList: [
                // {navPage: 'shangxin', navName: '上新'},
                // {navPage: 'nvzhuang', navName: '女装'},
                // {navPage: 'xiebao', navName: '鞋包'},
                // {navPage: 'muying', navName: '母婴'},
                // {navPage: 'shuma', navName: '数码'},
                // {navPage: 'jujia', navName: '居家'},
                // {navPage: 'nanshi', navName: '男士'},
                // {navPage: 'meizhuang', navName: '美妆'},
                // {navPage: 'meishi', navName: '美食'},
                {navPage: 'jingpin', title: ''}
                
            ],
            // navList: ['上新', "女装", "鞋包", "母婴", "数码", "居家", "男士", "美妆", "美食", "精品服饰"],
            url: '../../../static/todayNav.json'
            
        };
    },
    methods: {
    isShowTabBarFn() {
        return this.$route.path === "/today/shangxin" || this.$route.path === "/today" || this.$route.path === "/";
    }
    },
    mounted(){
        //获取数据
        Vue.nextTick(function(){
            //导航
            var mySwiper = new Swiper('.nav .swiper-container', {
                slidesPerView: 6,
                freeMode: true,
                spaceBetween: 5,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10
            }) ;
        });
    },
    //我们会把网络请求的代码，放在这个钩子函数中
    created() {
        console.log(this);
        //   console.log(this); //this当前组件实例
        // 在网络请求中，推荐使用箭头函数，这样能完美的解决 this指向问题
        this.$axios.get(this.url).then(res => {//异步请求需要回调 then函数
            // console.log(res, this);
            // console.log(JSON.parse(res.data))
            // this.navList.title =(res.data).data;
        }, err => {
            console.log(err);
        });
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
    /* height: 0.3rem; */
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

.shangxinHeader{
    width: 100%;
    /* height: 0.38rem; */
    display: flex;
    color: #999;
}
.search span{
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    margin:0 0.05rem;
}
.search img{
    width: 100%;
}
.search{
    margin: 5px 0 5px 13px;;
    flex: 1 1 auto;
    width: 3.0rem;
    height: 0.28rem;
    line-height: 0.28rem;
    background: red;
    background-color: #f2f2f2;
    border-radius: 5px;
    display: flex;
}
.search-input{
    flex: 1 1 auto;
}
.user{
    padding-top: 10px;
    flex:  0 0 auto;
    width: 0.42rem;
    height: 100%;
}
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

</style>