<!-- 
	vuex store 组件间通信
	Created by zras 
	Time 2017-09-27
 -->

<template>
	<div class="vuexCommunication">
		<p>子组件</p>
		<input type="text" placeholder="vuex store 子组件" v-model="vuexValue" @input="sentToFather">
	</div>
</template>

<script>
export default {
	name: 'bottom',
	data () {
		return {
			vuexValue: ''
		}
	},
	computed: {  
		fatherchange () {  
			return this.$store.state.storemsg
		}  
	},  
	watch: {  
		fatherchange: function (value, old) {  
			this.vuexValue = value
		}  
	}, 
	methods: {
		sentToFather () {
			this.$store.commit('getMsg', this.vuexValue)
		}
	},
	mounted () {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	p {
		padding-left: 20px;
	} 
	input {
		margin-left: 20px;
	}
</style>
