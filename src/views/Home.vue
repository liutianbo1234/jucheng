<template>
	<div class="home" ref="home">
		<header>
			<div class="guo" @click="tiaozhuan">
				<i class="iconfont icon-zuobiao"></i>全国
			</div>
			<div class="guo1">
				<input type="text" @click="sousuo" class="search" placeholder="搜索热门演出" />
			</div>
		</header>
		<div class="counter">
			<div class="swiper">
				<mt-swipe :auto="2000" :defaultIndex="1">
					<mt-swipe-item><img class="img" src="https://image.juooo.com/group1/M00/03/EC/rAoKNV3N-DOAbUyoAAKgvUMQsBE530.jpg" /></mt-swipe-item>
					<mt-swipe-item><img class="img" src="https://image.juooo.com//group1/M00/03/AE/rAoKNV1oc5KAXhECAACCx9hWB0I859.jpg" /></mt-swipe-item>
					<mt-swipe-item><img class="img" src="https://image.juooo.com/group1/M00/03/EC/rAoKNV3N-DOAbUyoAAKgvUMQsBE530.jpg" /></mt-swipe-item>
					<mt-swipe-item><img class="img" src="https://image.juooo.com/group1/M00/03/EC/rAoKNV3N-DOAbUyoAAKgvUMQsBE530.jpg" /></mt-swipe-item>
					<mt-swipe-item><img class="img" src="https://image.juooo.com/group1/M00/03/EC/rAoKNV3N-DOAbUyoAAKgvUMQsBE530.jpg" /></mt-swipe-item>
					<mt-swipe-item><img class="img" src="https://image.juooo.com/group1/M00/03/8D/rAoKmV4hS1iAOymGAAYKmJmfq2I683.png" /></mt-swipe-item>
				</mt-swipe>

			</div>

			<h3>热门演出</h3>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in $store.state.swiper3.hots_show_list" :key="index"> <img :src="item.pic" />
						{{item.show_name}}
					</div>

				</div>
			</div>
			<p>为你推荐</p>

			<loading></loading>
            <!-- <ul
               v-infinite-scroll="loadMore"
               infinite-scroll-disabled="loading"
               infinite-scroll-distance="10">
               <li v-for="(data,index) in list" :key="index">{{data}}</li>
             </ul> -->
		</div>
     


	</div>
</template>

<script>
	

	import Swiper from 'swiper';
	import '../../node_modules/swiper/css/swiper.min.css';
	import loading from './loading/loading.vue'
	// import {
	// 	Indicator
	// } from 'mint-ui';

	
	export default {
		name: 'home',
		data() {
			return {
				date: [],
				swlu: [],
				datala: [],
				datala1: [],
			
				list:[],
				datalist:[],
				timer: null,
				load: null,
				cityName: 'shanghai'
			}

		},
	
		methods: {
			tiaozhuan() {
				this.$router.push({
					path: '/ditu',
					
				})
				// this.$router.replace({
				// 		path: '/ditu',
					
				// })
			},
            sousuo(){
				this.$router.push({
					path:'/search'
				})
			},
			clickpiao(dateid) {
				this.$router.push({
					path: '/detail',
					query: {
						id: dateid
					}
				})

			},
			
			// getListMain_a() {
			// 	this.$store.dispatch("send")
			// 	if (this.$store.state.swiper3.length === 0) {
			// 		this.$store.dispatch("send")

			// 		setTimeout(() => {
			// 			this.swlu = this.$store.state.swiper3.hots_show_list
			// 		}, 500);
			// 		console.log(1111)
			// 	} else {
			// 		console.log("使用缓存")
			// 	}
			// },
			// handscroll() {
			// 	var hei = document.documentElement.scrollHeight || document.body.scrollHeight; //获取游览器高度
			// 	if (hei - document.documentElement.scrollTop === 667) {
			// 		this.$store.dispatch("city", this.count += 1)
					
			// 	}
			// }
		},
		components:{
			loading
		},
		mounted() {
			// Indicator.open({
			// 	text: 'Loading...',
			// 	spinnerType: 'fading-circle'
			// });
			
			// this.getListMain_a()
			if (this.$store.state.chengdu) {
				this.$store.dispatch("city", this.count)

				this.timer = setTimeout(() => {
					this.datala.concat(this.$store.state.chengdu.list)
				}, 500)

			} else {
				console.log("输出打印")
			}
			// this.swlu = this.$store.state.swiper
			//获取屏幕高度
			// this.load = setTimeout(() => {
			// 	Indicator.close();
			// }, 1500)
			window.onscroll = this.handscroll;
		},
		beforeUpdate() {
			new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 3,
				paginationClickable: true,
				spaceBetween: 30
			});
		},
		destroyed() {
			window.scroll = null;
			clearInterval(this.timer);
			clearInterval(this.load);
			console.log("destory")
		}
	}
</script>

<style scoped="scoped" lang="less">
	#gun {
		width: 100%;
		height: 100%;
	}

	.city {
		width: 45%;
		padding: 0.3rem;
		float: left;

		div {
			width: 100%;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.yuan {
			color: orange;
		}

	}

	.icon-zuobiao {
		font-size: 22px;
		color: orange;
		font-weight: 700;
	}

	.home {
		width: 100%;
		height: 100%;

		header {
			width: 100%;
			height: 2.5rem;
			position: fixed;
			top: 0;
			z-index: 222;
			left: 0;
			background: white;
		}

		.search {
			width: 90%;
			outline: none;
			border: 1px solid #ebebeb;
			border-radius: 1.5625rem;
			height: 1.75rem;
			background: #f5f5f5;
			margin-top: 0.425rem;
			padding-left: 1.25rem;
		}

		.dty {
			width: 100%;
			height: 10rem;
		}

		.guo1 {
			width: 70%;
			float: left;
			height: 2.4rem;

		}

		.guo {
			width: 20%;
			height: 2.4rem;
			font-weight: 600;
			color: black;
			float: left;
			line-height: 2.4rem;
			margin-left: 0.2rem;
		}

		.mint-swipe {
			height: 200px;
		}

		.counter {
			width: 100%;
			height: 100%;
			padding-top: 3rem;

			h3 {
				text-align: left;
				margin-left: 0.725rem;
			}

			p {
				text-align: left;
				color: black;
				font-size: 20px;
				height: 2rem;
				width: 96%;

				padding-left: 10px;
				font-weight: 600;
			}

			.tu {
				width: 96%;
				height: 22rem;
				background-color: antiquewhite;
				margin: 0 auto;
			}

			.tu1 {
				width: 48%;
				overflow-x: hidden;
				height: 15rem;
				margin-left: 0.225rem;
				float: left;
				background-color: cadetblue;
			}

			.tu2 {
				width: 48%;
				float: right;
				background-color: chocolate;
				height: 15rem;
			}

			.swiper {
				width: 94%;
				height: 12.5rem;
				margin: 0 auto;
				overflow: hidden;

				.mt-swipe {
					width: 100%;
					height: 10.5rem;

				}

				.mt-swipe-item {
					width: 100%;
					height: 10.5rem;

				}

				.img {
					width: 100%;
					height: 10.5rem;
				}
			}
		}
	}

	.swiper-wrapper img {
		width: 7rem;
		font-size: 0.875rem;
		display: block;
	}

	.mint-swipe-indicators {
		position: absolute;
		bottom: 30px;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}
</style>
