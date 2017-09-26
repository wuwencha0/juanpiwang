<template>
   <div id="today">
      <header>
        <div class="search">
            <span><img src = './assets/search.png'></span>
            <a class="search-input" href="" style="color:#999">搜索商品</a>
        </div>
        <div class="user"><span></span></div>
      </header>
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
  header{
    width: 100%;
    height: 0.38rem;
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
</style>