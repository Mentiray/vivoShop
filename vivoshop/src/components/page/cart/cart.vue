<template>
    <cartHeader :channelTitle="channelTitle"></cartHeader>
    
</template>

<script>
    import store from '@/vuex/store';
    import { mapActions } from 'vuex';
    import cartHeader from '@/components/page/common/headerNav';
    export default{
        data(){
            return{
                channelTitle:"购物车"
            }
        },
        components:{
            cartHeader
        },
        methods:{
            ...mapActions(['showCart'])
        },
        created() {
            this.showCart();
        },
        store
    }
</script>