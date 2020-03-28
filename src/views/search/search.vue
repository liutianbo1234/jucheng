<template>
	<div id="search">
		<div class="guo1">
			<input type="text" ref="shuru" @input="sou()" class="search" v-model="sh" placeholder="搜索热门演出" />
		</div>
		
		<div class="re" v-show="shei"><span style="width: 0.85rem;height: 100%;display: inline-block;"></span> 热门搜索</div>
		<div class="niu"  v-show="shei">	
			<span  v-for="(item,index) in cat" :key="index">{{item.word}}</span>
		</div>
		<div ref="li"  v-show="!shei" v-for="item in $store.state.searchDate.list" :key="item.schedular_id">{{item.city_name}}</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				cat:[],
				shei:true,
				sh:'',
				timer:null,
				datalist:[]
				
			}
		},
		created(){
			
				  console.log(this.$refs.shuru);
			    this.$nextTick(() => {
			          console.log(444);
			          console.log(this.$refs['shuru']);
			        });
		},
		methods:{
			sou(){		
				  const vm = this;
			      if(this.sh.length>0){
					  if(vm.timer){
						   clearTimeout(vm.timer)	
					  }
					this.shei=false
					var fontdata=this.sh
					
				vm.timer = setTimeout(()=>{
						vm.$store.dispatch("inputsearch",fontdata)
						console.log(vm.$store.state)
						
						var shshs = JSON.stringify(vm.$store.state.searchDate)
						console.log(shshs)
						  vm.$nextTick(() => {
							  var shshs = JSON.stringify(vm.$store.state.searchDate)
						     console.log(shshs,"aaaaaa")
						     });
					
					},2500)
				}else{
					this.shei=true
				}
				
			},
		
		},
		mounted() {
			this.$axios({
				      method: 'get',
				      url: 'https://api.juooo.com/Show/Search/getNewHotWord',
				      params: {
				        version: '6.1.1',
						referer:1
				      }
				   }).then(res=>{
					   this.cat= res.data.data
					     
				   })
				     console.log(this.$refs['shuru']);
				   this.$nextTick(() => {
				         console.log(555);
				         console.log(this.$refs['shuru']);
				       });
			},
		
			
		}
	
</script>

<style scoped="scoped" lang="less">
	#search{
		width: 100%;
		height: 100%;
	}
	.guo1{
		width:80%;
		border:0.0625rem black solid;
		height: 1.875rem;
		outline: none;
		margin: 0 auto;
		margin-top: 0.625rem;
		border-radius: 1.2625rem;
		
		.search{
			width: 80%;
			border:none; 
			height: 1.875rem;
			font-size: 0.75rem;
			outline: none;
			border-radius: 1.2625rem;
		}
		
		
		
	}
	.re{
		    color: #666;
			text-align: left;
			font-size: 0.7rem;
		    height: 1.25rem;
			 width: 100%;
			
	}
	.niu{
	  
	  
		span{
		  display: inline-block;
		  width: 25%;
		  margin: 0.625rem 1.25rem  0rem 0.625rem;
		  height: 1.65rem;
		  line-height: 1.65rem;
		      font-size: 0.8rem;
		      color: #232323;
		      background-color: #f5f5f5;

		}
	}
</style>
