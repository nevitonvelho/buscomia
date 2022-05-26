<template>
    <div class="container">
    
        <VueSlickCarousel  :arrows="true" :speed="500" :dots="true" :centerMode="true" :focusOnSelect='true' :infinite="true">
            <div class="slide"><img src="../assets/img/teste.png" alt="icon"></div>
            <div class="slide"><img src="../assets/img/teste2.png" alt="icon"></div>
            <div class="slide"><img src="../assets/img/teste2.png" alt="icon"></div>
            <div class="slide"><img src="../assets/img/teste2.png" alt="icon"></div>
            
        </VueSlickCarousel>
    </div>
</template>


<style scoped lang="scss">
    .container{
        height: 60vh;
        max-width: 1280px;
    }

    .slide{
        padding: 3px;
    }
   
</style>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Banner',
    components: { VueSlickCarousel },
   
}
</script>