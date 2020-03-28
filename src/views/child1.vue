<template>
	<div>
		<div>child1</div>
		<div>{{msg}}</div>
		<button @click="childclick">11</button>
		<slot></slot>
	</div>
</template>

<script>
	import bus from '../bus.js'
	export default{
		data(){
			return{
				msg:'11111122'
			}
			
		},
		methods:{
			childclick(){
				 this.$router.go(-1)
					// bus.$emit('val',this.msg)
					
					console.log(222)
				}
		
		}
	}
</script>

<style>
</style>
