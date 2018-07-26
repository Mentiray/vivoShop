<template>
    <div class="proDetail">
        <proDetailHeader :channelTitle="channelTitle"></proDetailHeader>
        <proDetailSwiper :proImg="proDetail.homeSwipe"></proDetailSwiper>
        <proDetailMenu :proName="proDetail.homeName" :proBright="proDetail.homeBright" :proContent="proDetail.homeTitle" :proPrice="proDetail.homePrice"></proDetailMenu>
        <proDetailContent :proImgs="proDetail.Images"></proDetailContent>
        <proDetailFooter :proID="proDetail.id"></proDetailFooter>
    </div>    
</template>

<script>
    import proDetailHeader from '@/components/page/common/headerNav';
    import proDetailSwiper from './component/proDetailSwiper';
    import proDetailMenu from './component/proDetailMenu';
    import proDetailContent from './component/proDetailContent';
    import proDetailFooter from './component/proDetailFooter';
    import axios from 'axios';
    export default{
        data(){
            return{
                proDetail:{},
                channelTitle:"商品详情"
            }
        },
        components:{
            proDetailHeader,
            proDetailSwiper,
            proDetailMenu,
            proDetailContent,
            proDetailFooter
        },
        mounted() {
            let that = this;
            let pageId = that.$route.query.id;
            console.log(pageId);
            axios.get("static/myData.json")
            .then((res)=>{     
                let proData = res.data.data.home;           
                proData.forEach(item => {
                    if(item.id==pageId){
                       that.proDetail = item;
                    }
                });
            })

        },
    }
</script>

