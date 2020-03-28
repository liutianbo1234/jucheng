<template>
	<div class="about111">
		<div>
			<form  @submit.prevent="submitFrom">
				<!-- 注册提交事件 .prevent 阻止表单的默认提交行为 -->
				账号:
				<input type="text" v-model="formData.user_name">
				<br />
				密码:
				<input type="password" name="pass" v-model="formData.password" v-if="ifDisplay"/>
				<input type="text" name="pass" v-model="formData.password" v-else/>
				 <p v-show="ifDisplay" @click="ifDisplay=!ifDisplay">隐藏</p>
				 <p v-show="!ifDisplay" @click="ifDisplay=!ifDisplay">显示</p>
				<br />
				<button type="submit" class="button">提交</button>
			</form>
		</div>

	</div>
</template>
<script>
	export default {
	
		data() {
			return {
				formData:{
					user_name: '',
					password: '',
					log_type: '2',
					reg_from: '2'
				},
				ifDisplay:false,

			};
		},
		methods: {
			submitFrom() {
				let _this = this;
				
				
				
				if (this.formData.user_name === '' || this.formData.password === '') {
					alert('账号或密码不能为空');
				} else {
					// this.$axios.defaults.baseURL = "http://localhost:9091/v1"
					//设置axios请求的超时时间
				 
					this.$axios.post('http://127.0.0.1:8081/login', {
							 'log_type': 2,
							 'reg_from': 2,
							 'user_name': _this.formData.user_name,
							 'password':_this.formData.password
						 
					}).then(res => {
						console.log(res.data);
						if(res.data.ok==1){
							sessionStorage.setItem("success", res.data.msg); 
							
							_this.$router.push('/');
						}else{
							alert('你在扯淡');
						}
						// _this.userToken = 'Bearer ' + res.data.data.body.token;
						// // 将用户token保存到vuex中
						// _this.changeLogin({
						// 	Authorization: _this.userToken
						// });
						
						// alert('登陆成功');
					}).catch(error => {
						alert('账号或密码错误');
						console.log(error);
					});

				}
			}
		}
	}
</script>
<style scoped="scoped">
	.about111 {
		width: 100%;
		height: 10rem;
		background-color: deeppink;
	}

	.button {
		width: 7rem;
		height: 1.275rem;
		background-color: palegoldenrod;
	}

	input {
		outline: none;
		border: none;
		height: 1.24rem;
		margin: 10px 0;
	}
</style>
