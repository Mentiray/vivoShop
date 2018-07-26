<template>
    <div class="indexChannelList">
        <ul>
            <li><img src="static/img/xuangou.jpg" alt="选购手机"></li>
            <li><img src="static/img/peijian.jpg" alt="选购配件"></li>
            <li><img src="static/img/pingbao.jpg" alt="选购屏保"></li>
            <li><img src="static/img/dingzhi.jpg" alt="定制手机"></li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"indexChannelList",
        data(){
           
        }
    }
</script>

<style scoped>
    .indexChannelList ul{
        display: flex;
        flex: 1;
        flex-grow:1;
        justify-content: center;
    }
    .indexChannelList li{
        width: 25%;
        padding: 3%;
    }
</style>
