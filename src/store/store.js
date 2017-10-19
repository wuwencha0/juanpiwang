import Vue from 'vue'
import Vuex from 'vuex'

//全局注册
Vue.use(Vuex)

let state = {
    cart_goods: [],
    current_good: {},
    user: {}
}

let mutations = {
    ADD(state, good){
        // 用来判断所添加的商品是否存在的标识
        let isExist = false

        // 存在的话，把当前购物车中的商品对象数量+1
        for (let tempItem of state.cart_goods) {
            if (tempItem.id == good.id) {
                // 把标识改成true
                isExist = true
                tempItem.count++
                break;
            }
        }

        // 如果不存在，则是新添加的商品
        if (!isExist) {
            // 设计购物车商品对象
            let good = {
                id: item.id,
                name: item.name,
                price: item.price,
                count: 1
            }
            state.cartProductList.push(cartProduct)
        }
    }
}

let actions = {

}

let getters = {

}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store