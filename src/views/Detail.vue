<template>
	<div>
		<div class="detali">
	      详情
		</div>
	</div>
</template>

<script>
	export default{
		mounted() {
			console.log(2222222222222)
			console.log(this.$route.query.id)
			this.$store.dispatch("delishshow",this.$route.query.id)
			setTimeout(()=>{
				console.log(this.$store.state.detail)
			     // console.log(this.$store.state.detail.share_data.share_pic)
			},500)
			
			
		}
	}
</script>

<style>
	.detali img{
		width: 100%;
		height: 15rem;
	}
</style>
