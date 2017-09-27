<template>
    <div id="youxuan">
        <header>
          <router-link to="/youxuan/shoping"><p>商城</p></router-link>
          <router-link to="/youxuan/live"><p>生活志</p></router-link>
        </header> 
        <router-view></router-view>
    </div>
</template>
 
<script>
export default {
  name: "youxuan",
  data () {
    return {
  
    };
  }
}
</script>
 
<style lang="css" scoped>
#youxuan{
    width:100%;
    height: 100%;
    background-color:#f4f4f8;
    position: relative; 
}
header{
    width:100%;
    height:0.38rem;
    background-color:#fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0.02rem 0.02rem #f3f3f3;
    position: fixed;
    top:0;
    left:0;
    z-index: 5;
}
header p{
    font-size: 0.15rem;
    color:#333;
}
</style>