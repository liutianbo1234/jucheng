<template>
	<div>
		<input type="text" v-model="mmm" />
	</div>
</template>

<script>
    import bus from '../bus.js'
	export default{
		data(){
			return{
				mmm:''
			}
		},
		mounted(){
		bus.$on("val",(data)=>{
		console.log(data)
		this.mmm = data
		   })
		}
 		
		
		
	}
</script>

<style>
</style>
