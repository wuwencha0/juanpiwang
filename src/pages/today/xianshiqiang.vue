<template>
   <div id="xianshi">
      <header class="xlheader">
            <div><img src="http://s2.juancdn.com/bao/170512/4/d/59158ea2ad0a49a4548b45ab_750x280.png"></div>
        </header>
        <div class="xiantime">
            <div class="kaiqiang">
                <p class="time">20:00</p>
                <p class="kai">已开抢</p>
            </div>
            <div class="kaiqiang">
                <p class="time">20:00</p>
                <p class="kai">已开抢</p>
            </div>
            <div class="kaiqiang">
                <p class="time">20:00</p>
                <p class="kai">已开抢</p>
               <!-- <span class="trg"></span> -->
               <div class="trg"></div>
            </div>
            <div class="kaiqiang">
                <p class="time">20:00</p>
                <p class="kai">已开抢</p>
            </div>
            <div class="kaiqiang">
                <p class="time">20:00</p>
                <p class="kai">已开抢</p>
            </div>
        </div>
        <div class="jishi">
            <div>- <span>离本场结束仅剩 : </span> <span>00时00分00秒 </span> -</div>
        </div>
        <div class="jianju"></div>
        <div class="main">
            <ul>
                <li>
                    <div class="mianImg"><img class="lazy loaded" src="https://goods3.juancdn.com/goods/170920/5/e/59c22ab1a9fcf846dd40d498_800x800.jpg?iopcmd=convert&amp;Q=88&amp;dst=webp"></div>
                    <div class="mainShu">
                        <p class="goods_name">圆领百搭拼色宽松卫衣</p>
                        <p class="goods_price ">
                            <i class="tip">限量价:</i>
                            <i class="m_icon" style="margin-left:-8px"> ￥</i>
                            <i class="now_price"> 19.90</i>
                            <i class="goods_old_price"> ￥298.00</i>
                        </p>
                        <div class="progress">
                            <div><i class="cover-bar" style="width:73%"></i><i class="txt">剩余73%</i></div>
                        </div>
                        <span class="buy_btn">马上抢 </span>
                    </div>
                </li>
            </ul>
        </div>
   </div>
</template>
 

<script>

import Vue from 'vue'

export default {
  name: "today",
  data () {
    return {
    }
  }
}
</script>
 
<style lang="css" scoped>
.xlheader{
    width: 100%;
    height: 1.35rem;
}
.xiantime{
    display: flex;
    flex: 1;
    height: 0.41rem;
    font-size: 13px;
}
.kaiqiang{
    width: 25%;
    background :#30363c;
    text-align: center;
    color: #5a5b5d;
    padding-top: 4px;
}
.kaiqiang:nth-of-type(3){
    background: #ff464e;
    color: #fff;
    position: relative;
}
.kaiqiang:nth-of-type(3) .trg{
    position: absolute;
    left: 0.26rem;
    bottom:-0.15rem;
   
    display: block;
    border:8px solid transparent;
    border-top:8px solid #ff464e ;
    z-index: 2;
}
/* ---------jishi-------- */
.jishi{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 13px;;
}
/* --------- */
.jianju{
    clear: both;
    height: 8px;
    background: #f4f4f8;
}
/* ----------main----------- */
.main{
    width:100%;
    font-size: 13px;
}
.main li{
    height: 1.15rem;
    width:3.37rem;
    margin: auto;
    padding-top: .08rem;
    display: flex;
    flex: 1;
}
.mianImg{
    width:.91rem;
    height: 0.91rem;
    margin-right: 10px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.mainShu{
    width: 2.46rem;
    height: 0.9rem;
    position: relative;
}
.mainShu i{
    font-style: normal;
}
.goods_price{
    margin-top: 0.35rem;
    color: #ff464e;
    font-size: 12px;
}
.m_icon, .now_price{
    font-size: 18px;
}
.goods_old_price{    
    color: #bbb;
    text-decoration: line-through;
}
.progress{
    width: 1.34rem;
    height: 0.13rem;
    background:  #ff464e;
    border-radius: 8px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 0.13rem;
}
.buy_btn{
    display: block;
    width:0.67rem;
    height: 0.29rem;
    line-height: 0.29rem;
    background:  #ff464e;
    color: #fff;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 0;
}



/* ------底部- */
.dibu{
  clear: both;
  height: 0.6rem;
  width:100%;
}

</style>