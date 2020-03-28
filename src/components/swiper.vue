<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
			
				<slot></slot>
		
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import '../../node_modules/swiper/css/swiper.min.css'
     export default{
		 mounted() {
		 	new Swiper('.swiper-container', {
		 			pagination: '.swiper-pagination',
		 			slidesPerView: 3,
		 			paginationClickable: true,
		 			spaceBetween: 30
		 		});
		 }
	 }
</script>

<style scoped="scoped">
	
</style>
