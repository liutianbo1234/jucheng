<template>
	<div>
		<div class="city">
			<span class="span1" @click="go">返回</span>
		    <span @click="tiao" class="span2">选择城市</span>	
	   </div>
	   <mt-index-list ref="mylist">
	    
	     <mt-index-section :index="data.id" v-for="data in datalist" :key="data.id">
	       <mt-cell  :title="item.name" v-for="item in data.list" :key="item.id"></mt-cell>
	      
	     </mt-index-section>
	   </mt-index-list>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				datalist:[]
			}
		},
		methods:{
			go(){
				this.$router.go(-1)
			},
			tiao(){
				console.log(1111)
				this.$router.replace({
					path: '/theaterchild'
				})
			}
			
		  },
		  mounted() {
			// console.log(document.documentElement.clientHeight)
			this.$refs.mylist.$el.style.height = document.documentElement.clientHeight-80+'px'
			axios({
				url:'https://api.juooo.com/city/city/getSortedCityList?version=6.1.1&referer=1',
			}).then(res=>{
				console.log(res.data.data)
				this.datalist = res.data.data
				
			})
		  }
		}
	
</script>

<style scoped="scoped" lang="less">
.city{
	

	width: 100%;
	height: 2.4rem;
	background-color: #EEE8AA;
	.span1{
		font-size: 1.075rem;
		float: left;
		height: 2.4rem;
		width:4rem;
		margin-left: 0.625rem;
		display: inline-block;
	}
	.span2{
		font-size: 1.075rem;
	     float: left;
		 height: 2.4rem;
		 text-align: center;
		 width:14rem;
		 display: inline-block;
	}
}
</style>
