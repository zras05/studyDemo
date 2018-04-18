<!-- 
	父子组件通信--子组件
	Created by zras 
	Time 2017-09-27
 -->

<template>
	<div class="VueCommunication">
		<p>子组件</p>
		<input type="text" placeholder="vue prop $emit 子组件" v-model="vueValue" @input="sentToFather"> 
	</div>
</template>

<script>
export default {
	name: 'bottom',
	props: ['msg'],
	data () {
		return {
			vueValue: ''
		}
	},
	watch: {
		msg (val) {
			this.vueValue = val
		}
	},
	methods: {
		sentToFather () {
			this.$emit('getMsg', this.vueValue)	
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
