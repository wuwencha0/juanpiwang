<template>
  <div id="app">
    <div class="tabbar">
      <router-link to="/home" >上新</router-link>
      <router-link to="/home" >精品优选</router-link>
      <router-link to="/market" >全球购</router-link>
      <router-link to="/cart" >购物车</router-link>
      <router-link to="/mine" >我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: wheat;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
