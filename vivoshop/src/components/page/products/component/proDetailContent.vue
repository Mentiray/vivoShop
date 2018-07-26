<template>
    <div class="proDetailContent">
        <mt-navbar v-model="active">
            <mt-tab-item id="item1">图文详情</mt-tab-item>  
            <mt-tab-item id="item2">参数详情</mt-tab-item>            
        </mt-navbar> 

        <mt-tab-container v-model="active" swipeable class="tabContent">
            <mt-tab-container-item id="item1">
                <img :src="item.one" v-for="(item,index) in proImgs" :key="index">
            </mt-tab-container-item>
             <mt-tab-container-item id="item2">
                <p class="cangshu">暂无信息</p>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                active:"item1"
            }
        },
        props:{
            proImgs:Array
        }
    }
</script>

<style scoped>
    .proDetailContent{
        margin-bottom: 1.5rem;
    }
    .tabContent{
        margin-top: 5px;
    }
    img{
        display: block;
    }
    .cangshu{
        font-size: 0.3rem;
        margin-top: 0.5rem;
    }
</style>
