import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		storemsg: ''
	},
	mutations: {
		getMsg (state, value) {
			state.storemsg = value
		}
	},
	actions: {}
})
