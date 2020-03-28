<template>
	<div>

		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
			<div class="load" v-for="(item,index) in this.datalist" :key="index">
				<div class="load1">
					<img :src="item.pic" />
					<p>{{item.name}}</p>
				</div>

			</div>

		</div>
		<h1 v-show="wait">正在加载请稍等</h1>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	import {
		InfiniteScroll
	} from 'mint-ui';
	Vue.use(InfiniteScroll);
	export default {
		data() {
			return {
				datala1: [],
				count: 1,
				datalist: [],
				loading: false,
				wait: true
			}
		},
		methods: {
			loadMore() {
				this.loading = true;
				setTimeout(() => {
					this.count++;
					axios({
						url: `https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${this.count}&referer_type=index&version=6.1.1&referer=2`,
					}).then(res => {	
						this.datalist = [...this.datalist, ...res.data.data.list]
						this.loading = false
						if (this.count >= 4) {
							this.loading = true;
							console.log("结束了")
							this.wait = false
						}
					});
				}, 1500)
			},
		},
		mounted() {
			axios({
				url: `https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=${this.count}&referer_type=index&version=6.1.1&referer=2`,
			}).then(res => {
				console.log(res.data.data.list)
				this.datalist = res.data.data.list

			});
		}
	}
</script>

<style scoped="scoped" lang="less">
	.load {

		width: 20rem;
		
		margin: 0 auto;
		height: 15rem;
		margin-top: 4rem;

		p {
			color: #FF1493;
			width: 80%;
			text-align: center;
		}

		img {
			width: 12rem;
			height: 12rem;

		}

	}

	h1 {
		color: #007AFF;
		height: 20rem;
	}
</style>
