import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        message: 'メッセージ'
    },
    mutations: {
        //カウントアップするミューテーションを登録
        increment(state) {
            state.count ++
        }
    }
})

export default store