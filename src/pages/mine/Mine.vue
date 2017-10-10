<template>
		<div id="mine">
			<div class="userCenter">
				<header>
					<div class="userTop">
            <span class="goback" onclick="window.history.go(-1)"><img src="../../assets/返回.png" alt=""></span>
						<span id="t-index">个人中心</span>
					</div>
					<div class="user-login">
              <span>注册</span><b>|</b><router-link to="/Login">登录</router-link>
						</div>
				</header>
			</div>
			<div class="userBox">
				<!-- 新增我的订单入口 -->
        <div class="myorder">
          <span>我的订单</span>
					<span>全部订单</span>
        </div>
				<div class="userItem">
					<!-- 新增横菜单 -->
            <div><img src="../../assets/待付款.png" alt=""><br><span>待付款</span></div>
            <div><img src="../../assets/待成团.png" alt=""><br><span>待成团</span></div>
            <div><img src="../../assets/待收货.png" alt=""><br><span>待收货</span></div>
            <div><img src="../../assets/退款-售后.png" alt=""><br><span>退款/售后</span></div>
				</div>
        <div class="linebox" ></div>
        <ul class="userItems">
          <li><span>我的收藏</span><span class="labelaf"></span></li>
          <li><span>我的拼团</span><span class="labelaf"></span></li>
          <li><span>VIP钻石卡</span><span class="labelaf">【199元大礼包限时派送中】</span></li>
          <li><span>我的免单券</span><span class="labelaf">0张</span></li>
          <li><span>我的优惠券</span><span class="labelaf"></span></li>
        </ul>
        <div class="linebox" ></div>
        <ul class="userItems">
          <li><span>客服中心</span><span class="labelaf"></span></li>
          <li><span>关于卷皮</span><span class="labelaf"></span></li>
        </ul>
        <div class="linebox" ></div>
        <input type="hidden" id="isBoxShow" name="isBoxShow" value="0">
        <input type="hidden" id="fromLoginUrl" name="fromLoginUrl" value="">
        </div>
      <ul class="foot">
        <li>返回首页</li>
        <li>客户端</li>
        <li>电脑版</li>
      </ul>
      <div class="bottom"></div>
		</div>
</template>
 
<script>
export default {
  name: "mine",
  data () {
    return {
  
    };
  }
}
</script>
 
<style lang="css" scoped>
  #mine{
    height: 144px;
    background: #ff464e;
    background-image: url(https://jp.juancdn.com/jpwebapp_v1/images_v1/user/user_center_bg.png);
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
    border-bottom: none;
    text-align: center ;
  }
  #mine header{
    color: #fff;
  }
  .userTop{
    position: relative;
    height: 44px;
    line-height: 44px;
    font-size: 20px;
  }
  .goback{
    font-size: 30px;
    font-family: 宋体;
    position: absolute;
    left: .2rem;
    top: 0;
    line-height: 44px;
    font-weight: 200 ;
  }
  .goback img{
    width: 20px;
  }
  .user-login{
    height: 100px;
    line-height: 100px;
    font-size: 20px;
  }
  .user-login b{
    margin: 0 .45rem ;
  }
  .myorder{
    font-size: 15px;
    color: #333 ;
    height: 48px;
    line-height: 47px;
    border-bottom: 1px solid #eee ;
    margin: 0 .2rem;
  }
  .myorder span:first-of-type{
    float: left;
    margin: 0 0 0 5px;
  }
  .myorder span:last-of-type{
    float: right;
    margin: 0 5px  0 0;
    color: #aaa;
  }
  .userItem{
    display: flex ;
    justify-content: space-around ;
    height: 82px;
    padding: 15px 0 12px ;
  }
  .userItem img{
    width: 28px;
  }
  .linebox{
    height: 10px;
    background: #eee;
  }
  .userItems{
    padding: 0 .13rem 0  .17rem;
    font-size: 15px;
    color: #333;
    text-align: left;
  }
  .userItems li{
    height: 48px;
    border-top: 1px solid #eee;
    line-height: 47px;
  }
  .userItems li:first-of-type{
    border: none;
  }
  .labelaf{
    float: right;
    color: #999;
  }
  .bottom{
    height: 50px;
    clear: both;
  }
  .foot{
    display: flex ;
    justify-content: space-around ;
    height: 40px;
    padding: 14px 0 ;
    line-height: 12px;
  }
  .foot li{
    width: 33%;
    border-left: 1px solid #ccc ;
  }
  .foot li:first-of-type{
    border: none;
  }
</style>