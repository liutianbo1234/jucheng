import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.prototype.$axios = axios;
import './rem/rem.js'
import "mint-ui/lib/style.css"
import Mint from 'mint-ui';
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);
// router.beforeEach((to, from, next) => {
//    	if (to.matched.some(record => record.meta.requireAuth)) { 
// 		next("/login")
// 		console.log()
// 	}else{
// 		next()
// 	}
	
// });

	

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
		console.log('需要登录');
		if (sessionStorage.getItem("success")) { // 判断当前的token是否存在 ； 登录存入的token
			next();
		} else {
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	} else {
		next();
	}
});

// axios.interceptors.request.use(config => {
//   // const token = localStorage.getItem('token');
//   // if (token) {
//   //   // 在发起请求前，给所有请求的头部添加token
//   //   config.headers.common['token'] = JSON.parse(token).token;
//   // }
//   console.log(config)
//   return config;
// }, error => {
//   // 对请求失败做处理
//   return Promise.reject(error);
// })



// 响应拦截
// axios.interceptors.response.use(res => {
//   // 对响应数据做处理
//   // console.log("对响应数据做处理")
//   const code = res.data.code;
//   if (code === 401) {
//     // 判断res.data.res_code 是否是401 如果是则跳转到登录，如果不是则正常返回
//     ElementUI.Message({
//       message: '请登录',
//       type: 'warning'
//     });
//     router.push('/login')
//     // 删除token以及user
//     localStorage.removeItem('user')
//     localStorage.removeItem('token')
//     return false;
//   } else if (code === -104) {
//     ElementUI.Message({
//       message: '系统异常',
//       type: 'warning'
//     });
//     return false;
//   }
//   return res;
// }, error => {
//   // 对响应错误做处理
//   return Promise.reject(error);
// })
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
