<template>
    <div id="live">
      <header>
        <p>全部</p>
        <p>优选life</p>
        <p>有妙招</p>
      </header>
      <div class="shop_list">
        <img src="https://goods1.juancdn.com/jas/170926/0/d/59ca46fca9fcf87b921decde_1080x804.png">
      </div>
      <div class="shop_list">
        <img src="https://goods1.juancdn.com/jas/170926/0/d/59ca46fca9fcf87b921decde_1080x804.png">
      </div>
      <div class="shop_list">
        <img src="https://goods1.juancdn.com/jas/170926/0/d/59ca46fca9fcf87b921decde_1080x804.png">
      </div>
    </div>
</template>
 
<script>
export default {
  name: "live",
  data () {
    return {
  
    };
  }
}
</script>
 
<style lang="css" scoped>
#live{
    width:100%;
    height: 100%;
    background-color:#f4f4f8;
    position: relative;
    padding-top:0.4rem; 
}
header{
  width: 100%;
  height: 0.35rem;
  display: flex;
  align-items: center;
}
header p{
  background-color:#fff;
  margin-left:0.14rem;
  height:0.21rem;
  line-height: 0.16rem;
  border:1px solid #ccc;
  border-radius: 0.1rem;
  padding: 0 0.1rem; 
  color:#666;
}
.shop_list{
  width: 100%;
  height:2.68rem;
  background-color:#fff;
  margin-bottom:.1rem ;
}
.shop_list img{
  height:100%;
}
</style>