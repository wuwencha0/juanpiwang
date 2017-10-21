import Vue from 'vue'
import Vuex from 'vuex'
// 引入 axios
import axios from 'axios'

//全局注册
Vue.use(Vuex)

let state = {
    cart_goods: [],
    current_good: null,
    user: null,
    menuListData: null,
    showData: null,
    navListData: null,
    shangxinBanner: null,
    shangxinMain: null,
    nvzhuangListnv: null,
    nvzhuangMain: null,
    xiebaoListnv: null,
    xiebaoMain: null,
    muyingListnv: null,
    muyingMain: null,
    shumaListnv: null,
    shumaMain: null,
    jujiaListnv: null,
    jujiaMain: null,
    nanshiListnv: null,
    nanshiMain: null,
    meizhuangListnv: null,
    meizhuangMain: null,
    meishiListnv: null,
    meishiMain: null,
    jingpinListnv: null,
    jingpinMain: null,
    xianshiListData: null,
    listData: null,
    list2Data: null,
    list3Data: null,
    list4Data: null,
    list5Data: null,
    list6Data: null
}

let mutations = {
    ADD(state, good){
        // 用来判断所添加的商品是否存在的标识
        let isExist = false

        // 存在的话，把当前购物车中的商品对象数量+1
        for (let item of state.cart_goods) {
            if (item._good.goods_id == good.goods_id) {
                // 把标识改成true
                isExist = true
                item.count++
                break;
            }
        }

        // 如果不存在，则是新添加的商品
        if (!isExist) {
            // 设计购物车商品对象
            let goodp = {
                count: 1,
                _good: good
            }
            state.cart_goods.push(goodp)
        }
    },
    // 购物车中某个商品数量增加的逻辑
    UP(state, id) {
        for (let item of state.cart_goods) {
            if (item._good.goods_id == id) {
                item.count++
                break;
            }
        }
    },
    // 购物车中某个商品数量减少的逻辑
    DOWN(state, id) {
        for (let item of state.cart_goods) {
            if (item.id == id) {
                if (item.count > 1) {
                    item.count--
                }
                break;
            }
        }
    },
    // 删除购物车中某个商品的逻辑
    REMOVE(state, id) {
        for (let index in state.cart_goods) {
            if (state.cart_goods[index].id == id) {
                state.cart_goods.splice(index, 1)
                break;
            }
        }
    },
    ACTIVEGOOD(state, item){
        state.current_good = item
    },
    GETDATA(state, item){
        state[item.type] = item.data;
    }
}

let actions = {
    add(context, item) {
        context.commit('ADD', item)
    },
    up({ commit }, id) {
        commit('UP', id)
    },
    down({ commit }, id) {
        commit('DOWN', id)
    },
    remove({ commit }, id) {
        commit('REMOVE', id)
    },
    activegood({ commit }, item){
        commit('ACTIVEGOOD', item)
    },
    getData({ commit }, item){
        commit('GETDATA', {data:{}, type: item.type})
        axios.get(item.url).then(res => {
            commit('GETDATA', {data:res.data, type: item.type})
        }, err => {
            console.log(err);
        });
    }
}

let getters = {
    // 获取商品总数
    totalCount(state) {
        let resultTotalCount = 0
        for (let item of state.cart_goods) {
            resultTotalCount += Number(item.count)
        }
        return resultTotalCount
    },
    // 获取商品总价格
    totalPrice(state) {
        let resultTotalPrice = 0
        for (let item of state.cart_goods) {
            resultTotalPrice += Number(item.count * item.price)
        }
        return resultTotalPrice
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store