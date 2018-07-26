<template>
    <div class="footerTab">
        <div class="navList">
            <div class="nav">
                <i class="iconfont icon-shouye"></i>                
                <span>首页</span> 
            </div>
            <div class="nav">
                <i class="iconfont icon-fenlei"></i>
                <span>分类</span> 
            </div>
             <div class="nav">
                <i class="iconfont icon-zixun"></i>
                <span>动态</span> 
            </div>
             <div class="nav">
                <i class="iconfont icon-gerenzhongxin"></i>
                <span>个人中心</span> 
            </div>
        </div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .footerTab{
        width: 100%;
        height: 1.5rem;
        position: fixed;
        bottom: 0;
        background: #ffffff;
        border-top: 1px solid #cccccc;
    }
    .navList{
        display: flex;
        flex: 1;
    }
    .nav{
        width: 25%;
    }
    i{
        font-size: 0.6rem;
        display: block;
        margin-top: 0.2rem;
        margin-bottom: -0.3rem;
    }
    span{
        font-size: 0.3rem;
    }
</style>


