<template>
	<div class="zong">
		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
	</div>
</template>

<script>
	
	export default{
		mounted(){
			// this.$axios.get('https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=1').then(
			//   (res)=>{
			// 	  console.log(res)
			//   }
			// )
			this.$axios({
			      method: 'get',
			      url: 'https://api.juooo.com/theatre/index/getTheatreList',
			      params: {
			        page:1,
			        version: '6.1.1',
					referer:1
			      }
			   }).then(res=>{
				   console.log(res)
				   console.log(res.data);
				   console.log(res.status);
				   console.log(res.statusText);
				   console.log(res.headers);
				   console.log(res.config);
			   })
		}
	}
</script>

<style scoped="scoped" lang="less">
	
</style>
