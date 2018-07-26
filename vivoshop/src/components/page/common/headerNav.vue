<template>
    <div class="proDetailHeader">
        <div class="back" @click="getBack">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="title">
            {{channelTitle}}
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            channelTitle:String
        },
        methods:{
            getBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .proDetailHeader{
        border-bottom: 1px solid #cccccc;
    }
    .back{
        position: absolute;
        left: 0.5rem;
        font-size: 0.5rem;
        line-height: 1.5rem; 
    }
    .title{
        width: 100%;
        height: 1.5rem;
        margin: auto;
        font-size: 0.5rem;
        line-height: 1.5rem; 
    }
</style>
