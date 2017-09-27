<template>
   <div id="jujia">
       居家
   </div>
</template>
 
<script>
export default {
  name: "today",
  data () {
    return {

    };
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

</style>