<template>
    <div class="index">
        <indexHeader></indexHeader>
        <indexSwiper></indexSwiper>
        <indexChannelList></indexChannelList>  
        <indexHotList :proList="proList"></indexHotList>   <!-- 通过props做父子通信 -->
        <footerTab></footerTab>       
    </div>
</template>

<script>
    import indexHeader from '@/components/page/index/component/indexHeader'
    import indexSwiper from '@/components/page/index/component/indexSwiper'
    import indexChannelList from '@/components/page/index/component/indexChannelList'
    import indexHotList from '@/components/page/index/component/indexHotList'
    import footerTab from '@/components/page/common/footerTab'
    import axios from 'axios';
    export default{
        data(){
            return{
                proList:[]
            }
        },
        components:{
            indexHeader,
            indexSwiper,
            indexChannelList,
            indexHotList,
            footerTab
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                let that = this;
                axios.get("static/myData.json")
                .then((res)=>{                   
                    that.proList = res.data.data.home;
                });
               
            }
        }
        
    }
</script>