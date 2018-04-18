<!-- 
	vue 通信
	Created by zras 
	Time 2018-03-24
 -->

<template>
	<div id="communication">
		<div>
			<p>父子组件通信</p>
			<p>父组件</p>
			<input type="text" v-model="vueFatherValue" placeholder="vue prop $emit 父组件">
			<VueCom class="VueCom" :msg="vueFatherValue" @getMsg="getVueMsg"></VueCom>
		</div>
		<div>
			<p>vuex store组件间通信</p>
			<p>父组件</p>
			<input type="text" v-model="vuexFatherValue" placeholder="vuex store 父组件" @input="sentToChild">
			<VuexCom class="VuexCom"></VuexCom>
		</div>
	</div>
</template>

<script>
	import VueCom from '@/components/VueCommunication.vue'
	import VuexCom from '@/components/VuexCommunication.vue'
	export default {
		name: 'app',
		data () {
			return {
				vueFatherValue: '',
				vuexFatherValue: ''
			}
		},
		components: {
			VueCom,
			VuexCom
		},
		computed: {  
			childchange () {  
				return this.$store.state.storemsg
			}  
		},  
		watch: {  
			childchange: function (value, old) {  
				this.vuexFatherValue = value
			}  
		}, 
		methods: {
			sentToChild () {
				this.$store.commit('getMsg', this.vuexFatherValue) 
			},
			getVueMsg (value) {
				this.vueFatherValue = value
			}
		},
		mounted () {
		}
	}
</script>

<style scoped>
	#communication {
		width: 100%;
	}
	p {
		padding-left: 20px;
	}
	#communication>div {
		width: calc(50% - 1px);
		float: left;
		border-left: 1px solid #f00;
		padding-bottom: 20px;
	}
	input {
		margin-left: 20px;
	}
</style>
