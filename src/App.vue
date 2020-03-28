<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact="exact">
		   <span><i class="iconfont icon-shouyeweixuanzhong"></i></span>
		  <span>首页</span>
		 
	</router-link> 
	
		<router-link to="/about">
				  <span><i class="iconfont icon-dianyingyuanjulebulitang"></i></span>
				  <span>剧院</span>
		</router-link>
	  <router-link to="/main">
		  <span><i class="iconfont icon-piaojia"></i></span>
		  <span>票价</span>
	  </router-link>
	  <router-link to="/me">
		  <span><i class="iconfont icon-wode-copy"></i></span>
		 <span>我的</span>
	  </router-link>
    </div>
	
     <keep-alive>
         <router-view v-if="$route.meta.keepAlive">
             <!--这里是会被缓存的路由-->
         </router-view>
     </keep-alive>
     <router-view v-if="!$route.meta.keepAlive">
         <!--因为用的是v-if 所以下面还要创建一个未缓存的路由视图出口-->
     </router-view>
    
	
  </div>
</template>

<style lang="less" scoped="scoped">
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif; 
      -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}

#nav {
	.iconfont{
		font-size: 1.5rem;
	}
	display: flex;
	background-color: white;
	z-index: 222;
	justify-content: space-around;
    box-shadow: 3px 0px 0.06667rem #ebebeb;
     width: 100%;
     position: fixed;
     /* height: 100%; */
     height:3rem;
     bottom: 0;
     left: 0;
	 span{
		 display: block;
		 font-size: 0.75rem;
		 padding: 0.1rem 0;
	 }
	 
  a {
    font-weight: bold;
    color: #2c3e50;
	text-decoration: none;

    &.router-link-exact-active {
      color: orange;
    }
  }
}
</style>
