<template>
    <div class="indexnav">
       <div class="tabbar" v-show="navflag">
        <router-link v-for="(item, index) in menuList" 
          :to="routes[index]" 
          :key="item.id" 
          :style="'color:' + (index == curPage ? item.act_color : '')">
            <img :src="[item, index, curPage] | activeImg"><br>
            {{item.title}}
          </router-link>
      </div>
      <router-view></router-view>
    </div>
</template>
 
<script>

export default {
  name: "indexnav",
  data () {
    return {
      routes : [ "/today", "/youxuan", "/global", "/cart", "/mine" ]
    };
  },
  computed: {
    navflag(){
      return this.$route.path === '/' || this.$route.path.indexOf('/today')>=0 || this.$route.path.indexOf('/youxuan')>=0 || this.$route.path.indexOf('/global')>=0 || this.$route.path.indexOf('/cart')>=0 || this.$route.path.indexOf('/mine')>=0 ;
    },
    curPage(){
      var num = 0 ;
      if(this.$route.path.indexOf('/youxuan')>=0) {
        num = 1 ;
      }else if(this.$route.path.indexOf('/global')>=0){
        num = 2 ;
      }else if(this.$route.path.indexOf('/cart')>=0){
        num = 3 ;
      }else if(this.$route.path.indexOf('/mine')>=0){
        num = 4 ;
      }
      return num ;
    },
    menuList(){
      if (this.tools.isDataNull(this, 'menuListData', '../../../static/getMenu.json')) return []
      return this.$store.state.menuListData.menu_list
    }
  },
  filters:{
    activeImg(item) {
      return item[1] == item[2] ? item[0].act_icon : item[0].bg_icon ;
    }
  }
}
</script>
 
<style lang="css" scoped>
.tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #eee;
  z-index: 1000;
}
img{
  width: 24px;
  height: 24px;
}
.navA{
  color: red;
}
.indexnav{
  height: 100%;
}
</style>