<template>
	<div id="home">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default{
	name:'home',
	mounted(){
		new Swiper ('.swiper-container', {
			// 循环模式选项
			loop: true,
			autoplay:true,
			//分页器
			pagination: {
			  el: '.swiper-pagination',
			  clickable:true
			},
		})
	}
}
</script>
<style scoped>
	
</style>