<template>
	<div class="me">
		<div class="footer">购物车</div>
		<content>
			
			<div class="gou" v-for="(item,inex) in data" :key="inex">
				<mt-cell-swipe
				
				  :right="[
				    {
				      content: '删除',
				      style: { background: 'red', color: '#fff' },
				      handler: () => del(inex)
				    }
				  ]">
				  <div>  
				<input type="checkbox" :value="item" v-model="datalist" />
				<div> <img :src="item.img"/>
			    <span>{{item.datalist}} 单价{{item.price}}元</span>
			   </div>
			  
			  <div>
				  <span>购买数量</span>
			      <button @click="item.number>0?item.number--:item.number=0">-</button>
				  <span>{{item.number}}</span>
				 <button @click="item.number++">+</button>
			  </div>
			</div>
			  </mt-cell-swipe>
			</div>
		</content>
		
		<footer>
			总价格:{{zong}}元
		</footer>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				datalist:[],
				data: [{
						img: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1585307987&di=c673b58890873bba31f6fbde2d745aa0&src=http://a3.att.hudong.com/68/61/300000839764127060614318218_950.jpg",
						datalist:"这是一个玩",
						price: 2,
						number: 1,
					},
					{
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585318072071&di=fea8486e2a76a0f7a36f3ab0fd902a14&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F14%2F75%2F01300000164186121366756803686.jpg",
						datalist:"这是一个撒范德萨看",
						price: 8,
						number: 1,
					},
					{
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585318072071&di=abb3afaa165aec472d9d39170ca683d5&imgtype=0&src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0704%2Fe53c868ee9e8e7b28c424b56afe2066d.jpg",
						datalist:"这是一个南康警方",
						price: 5,
						number: 3,
					},
					
				],
				total:0
				
			}
		},
		methods:{
			del(inex){
				this.data.splice(inex,1)
			}
		},
		created() {
			 
		},
		computed:{
			zong(){
				
				
				// for(var i in this.datalist){
				// 	console.log(i)
				// 	sum +=	this.datalist[i].price * this.datalist[i].number
					
			// 	// },
		          var total =0
				   if(this.datalist.length>0){
					  
					   for (var i = 0; i < this.datalist.length; i++) {
					       total += this.datalist[i].number * this.datalist[i].price
					   }
				   }
		           
	
				
				return total;
				// return shuju.filter((shuju)=>{
				// 	shuju.price * shuju.number
				// })
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">

	.me {
		width: 100%;
		height: 100%;
	}

	.footer {
		width: 100%;
		height: 2.5rem;
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		line-height: 2.5rem;
		background-color: red;
	}
	content{
		width: 100%;
		height:100%;
		margin: 2.9rem 0;
		display: block;
		.gou{
			margin-bottom: 0.25rem;
			width: 97%;
			height: 10rem;
			text-align: center;
			
			img{
				width: 30%;
				height: 7rem;
				float: left;
			}
			div:nth-child(1){
				width: 100%;
				height: 8rem;
			}
			div:ntg-child(2){
				width: 100%;
				height: 4rem;
			    display: flex;
				justify-content: space-around;
			}
			button{
				width: 1rem;
				height: 2rem;
			}
		}
	}
	footer{
		width: 100%;
	    margin-bottom: 2.4rem;
		height: 4rem;
		background-color: #FF1493;
		
		
	}
	.mint-cell-swipe-button{
		line-height:128px; 
	}
</style>
