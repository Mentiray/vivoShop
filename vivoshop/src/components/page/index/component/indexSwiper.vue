<template>
    <div class="indexSwiper">
        <mt-swipe :auto="auto" :showIndicators="showIndicators">
            <mt-swipe-item v-for="(item,index) of swiperList" :key="index">
                <img :src="item">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        name:"indexSwiper",
        data(){
            return{
                auto: 4000,
                showIndicators: true,
                swiperList:[
                    "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg",
                    "https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
                ]
            }
        }
    }
</script>


<style scoped>
.indexSwiper{
    width: 100%;
    height: 7.4rem;
}
</style>
