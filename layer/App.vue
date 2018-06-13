<template>
  <div id="app">
	  <p @click="loading()">loading</p>
	  <p @click="msg">msg</p>
	  <p @click="alert">alert</p>
	  <p @click="confirm">confirm</p>
	  <Layer :layer='layer' @close="closeAlert(layer)" @confirm="confirmAlert"></Layer>
  </div>
</template>

<script>
export default {
	name: 'App',
	data () {
		return {
			layer: {}
		}
	},
	components: {},
	methods: {
		confirmAlert () {
			this.layer = {}
		},
		loading () {
			this.layer = {
				type: 'loading'
			}
			setTimeout(() => {
				this.layer = {
					show: false
				}
			}, 3000)
		},
		msg () {
			this.layer = {
				type: 'msg',
				msg: ['提示提示提示']
			}

		},
		alert () {
			this.layer = {
				type: 'alert',
				title: '标题',
				msg: ['提示提示提示']
			}

		},
		confirm () {
			this.layer = {
				type: 'confirm',
				title: '标题',
				msg: ['提示提示提示'],
				btns: ['取消', '确认']
			}
		}
	},
	mounted () {}
}
</script>

<style>
html, body {
	margin: 0;
	padding: 0;
	height: 100%;
}
#app {
	height: 100%;
	overflow: hidden;
}
</style>
