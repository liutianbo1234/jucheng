<template>
	<div class="li">我是儿子
	   <p>{{notic}}</p>
	   <input type="button" @click="childchick" value="字传父"/>
	</div>
</template>

<script>
	export default{
		props:['notic'],
		data(){
			return{
				childvalue:"12344"
			}
		},
		methods:{
			childchick(){
				//chuildbyvalue自定义是事件
				this.$emit("childbyvalue",this.childvalue)
				
				console.log(this.childvalue)
			}
		}
	}
</script>

<style scoped="scoped">
	.li{
		color: red;
	}
</style>
