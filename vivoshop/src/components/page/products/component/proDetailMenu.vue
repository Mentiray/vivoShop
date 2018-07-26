<template>
    <div class="proDetailMenu">
       <div class="description">
            <p class="proName">{{proName}}</p>
            <p class="proContent"><span class="proBright">【{{proBright}}】</span>{{proContent}}</p>
            <p class="proPrice">￥{{proPrice}}</p>
       </div>
       <div class="proNum">
            <div class="title">购买数量</div>
            <div class="controller">
                <a href="javascript:void(0);" @click="addNum">+</a>
                <input type="text" v-model="proNum">
                <a href="javascript:void(0);" @click="descNum">-</a>
            </div>
            
       </div>
       <div class="intro">

       </div>

    </div>
</template>

<script>
    import bus from '@/assets/bus.js';
    export default{
        data(){
            return{
                proNum : 1
            }
        },
        props:{
            proName:String,
            proContent:String,
            proBright:String,
            proPrice:String
        },
        methods:{
            addNum(){
                this.proNum++;
            },
            descNum(){
               if(this.proNum > 1){
                    this.proNum--;
               }
            },
            sendNum(){
                bus.$emit("sendNum",this.proNum);
            }
        },
        updated() {
            this.sendNum();
        }
    }
</script>

<style scoped>
    .description{
        font-size: 0.3rem;
        text-align: left;
        padding: 0.3rem;
    }
    .proName{
        font-size: 0.6rem;
    }
    .proBright{
        color: red;
    }
    .proContent{
        margin: 0.2rem 0;
        line-height: 0.6rem;
    }
    .proPrice{
        font-size: 0.8rem;
        color: red;
    }
    .proNum{
        width: 100%;
        height: 1rem;
        padding: 0.5rem 0;
        border-top: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
    }
    .proNum .title{
        width:3rem;
        font-size: 0.4rem;
        float: left;
        line-height: 1rem;
    }
    .controller{
        width: 3.02rem;
        height: 1rem;
        float: left;
        border: 1px solid #cccccc;
    }
    .controller a{
        width: 1rem;
        height: 100%;
        float: left;
        font-size: 0.6rem;
        line-height: 1rem;
    }
    .controller input{
        width: 1rem;
        height: 100%;
        padding: 0;
        border: none;
        border-left: 0.01rem solid #cccccc;
        border-right: 0.01rem solid #cccccc;
        text-align: center;
        float: left;
    }
    
</style>

