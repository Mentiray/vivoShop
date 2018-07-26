import state from './state';
const actions = {
    addCart(state,item){
        let isHave = false;
		//商品是否已存在于订单列表
		for( let i = 0; i < state.orderList.length; i++){
			if(state.orderList[i].proID == item.proID){
				isHave = true;
			}		
        }
        //更新商品列表
		if(isHave){
			let arr = state.orderList.filter( o=>o.proID == item.proID);
			arr[0].proNum++;
		}
		else{
			let newPro = {proID:item.proID,proName:item.proName,proPrice:item.proPrice,proNum:1};
			state.orderList.push(newPro);
		}
    },
    showCart(state){
        state.orderList;
    }
};

export default actions;