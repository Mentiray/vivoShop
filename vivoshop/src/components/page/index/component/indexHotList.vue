<template>
    <div class="indexHotList">
        <div class="title">
            热卖商品
        </div>
        <div class="listContainer">
            <!-- 这里注意了，id和item.id是两个东西，id是系统默认的排序，item.id是你数据自己定义的
                 所以如果用系统的默认排序，需要写成（item,id）in proList
             -->
            <div class="item" v-for="item in proList" :key="item.id" @click="getDetail(item.id)">
                <div class="itemContainer">     
                    <img class="proImg" :src="item.homeImg">
                    <div class="proName">{{item.homeName}}</div>
                    <div class="proInfo">{{item.homeNametwo}}</div>
                    <div class="proPrice">￥{{item.homePrice}}</div>
                </div>
            </div>  
        </div>              
    </div>
</template>

<script>
    export default{
        props:{
            proList:Array
        },
        methods:{
            getDetail(id){
                this.$router.push(
                    {
                        path:"proDetail",
                        query:{id:id}
                    }
                );
            }
        }
    }
</script>

<style scoped>
    .title{
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        font-size: 0.6rem;
        padding: 0.3rem;
    }
    .listContainer{
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }
    .listContainer .item{
        width: 50%;
        font-size: 0.35rem;        
        border-bottom: 1px solid #cccccc; 
    }
    .listContainer .itemContainer{
        padding: 0.5rem 0;
    }
    .proName{
        font-weight: bold;
        margin-top: 0.3rem;
    }
    .proInfo{
        margin: 0.3rem;
    }
    .proPrice{
        color: red;
    }
</style>
