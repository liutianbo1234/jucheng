<template>
	<keep-alive>
		<div class="about">
			<swiper :key="$store.state.theater.length">
				<div class="swiper-slide" v-for="item in $store.state.theater" :key="item.id">
					<img :src="item.pic"/>
					<p>{{item.name}}</p>
				</div>
			</swiper>
       <button @click="chuanzhi()">六天比</button>
	   <theaterchild :fatherdata="cityName"></theaterchild>
		</div>
	</keep-alive>

</template>
<script>
	import swiper from '../components/swiper.vue'
	import theaterchild from '@/views/theater/theaterchild.vue'
	export default {
		data() {
			return {
				list: [],
				cityName:"刘田波"
			}
		},
		
		
		mounted() {
			// if(this.list.length===0){

			// }
			this.$store.dispatch("theater")
			
		},
		methods:{
			chuanzhi(){
				this.cityName= "冬霞姐"
				// this.$router.push({
				// 	path:"/theaterchild"
				// })
				
			},
		},
		components: {
			swiper,
			theaterchild
		}
	}
</script>
<style scoped="scoped" lang="less">
	.about {
		width: 100%;
		height: 10rem;
	
		
	}
	img{
		width:6rem;
		height: 8rem;
		padding: 0.625rem;
		
	}
</style>
