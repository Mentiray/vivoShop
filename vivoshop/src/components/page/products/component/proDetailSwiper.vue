<template>
    <div class="proDetailSwiper">
        <mt-swipe :auto="auto">
            <mt-swipe-item  v-for="(item,index) in proImg" :key="index">
                <img :src="item.swipe">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                auto:4000,
                proDetail:[]
            }
        },
        props:{
            proImg:Array
        } 
    }
</script>

<style scoped>
    .proDetailSwiper{
        width: 100%;
        height: 10.6rem;
    }
    .proDetailSwiper img{
        width: 80%;
        margin: auto;
        padding-top: 0.3rem;
    }
</style>
