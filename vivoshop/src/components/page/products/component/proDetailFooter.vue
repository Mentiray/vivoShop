<template>
    <div class="proDetailFooter">
        <div class="itemSmall" @click="dianpu">
            <i class="iconfont icon-dianpu"></i>
            <span>店铺</span>
        </div>
        <div class="itemSmall">
            <i class="iconfont icon-shoucang"></i>
            <span>收藏</span>
        </div>
        <div class="itemSmall" @click="goCart">
            <i class="iconfont icon-gouwuche"></i>
            <span>购物车</span>
        </div>
        <div class="itemBig jiaru" @click="addCart()">
            加入购物车
        </div>
        <div class="itemBig">
            立即购买
        </div>
    </div>
</template>

<script>
    import { mapState,mapActions } from 'vuex';
    import bus from '@/assets/bus.js';
    export default{
        data(){
            return{
                proOrder : {
                    proID : 0,
                    proNum : 0
                    
                }
            }
        },
        props:{
            proID:Number
        },
        methods:{
            dianpu(){
                this.$router.push({path:"/"});
            },
            goCart(){
                this.$router.push({path:"cart"});
            },
            addCart(){
                console.log(this.proOrder.proNum,this.proOrder.proID);
            },
            getNum(){
                bus.$on("sendNum",(proNum)=>{
                    this.proOrder.proNum = proNum;
                    this.proOrder.proID = this.proID;
                });
            }
        },
        mounted() {
            this.getNum();
        }
    }
</script>

<style scoped>
    .proDetailFooter{
        width: 100%;
        height: 1.5rem;
        position: fixed;
        bottom: 0;
        display: flex;
        flex: 1;
        background: #ffffff;
        border-top: 1px solid #cccccc;
    }
    .itemSmall{
        width: 16%;
        height: 100%;
        font-size: 0.2rem;
        border-right: 1px solid #cccccc;
    }
    .itemBig{
        width:26%;
        height:100%;
        line-height: 1.5rem;
        font-size: 0.41rem;
        text-align: center;
        color: #ffffff;
        background: #e3211e;
    }
    .jiaru{
        background:#ff9800;
    }
    i{
        font-size: 0.6rem;
        display: block;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }
    span{
        font-size: 0.3rem;
    }
</style>
