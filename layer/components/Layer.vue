<!--
	弹窗组件
	Created by zras 
	Time 2018-05-30

	show	true				显示/隐藏弹窗	
	type	msg					弹窗类型				必填
			alert
			confirm
			loading
	bg		rgba(0,0,0,0.5)		背景颜色
	msg     ''					弹窗文字				除type:loading外必填
	time	5000				提示显示时间,单位：毫秒	  type:msg
	title	''					标题					type:alert type:confirm

	close()						关闭弹窗				type:alert type:confirm
	confirm()					'确认'事件				type:confirm '确认'事件
 -->

<template>
	<div class='layer'>
		<div class="loading warp" :style="{background:newLayer.bg || init.bg}" v-show="newLayer.type === 'loading'"><img src="../assets/loading.gif"></div>
		<div class="msg warp" :style="{background:newLayer.bg || init.bg}" v-show="newLayer.type === 'msg'">
			<div class="layerwarp" :style="{top: msgtop + 'px'}">
				<p class="word" v-for="item in newLayer.msg" :key="item">{{item}}</p>
			</div>
		</div>
		<div class="alert warp" :style="{background:newLayer.bg || init.bg}" v-show="newLayer.type === 'alert'">
			<div class="layerwarp" :style="{top: msgtop + 'px'}">
				<p class="title">{{newLayer.title}}</p>
				<p class="word" v-for="item in newLayer.msg" :key="item">{{item}}</p>
				<p class="btn" @click="close">确定</p>
			</div>
		</div>
		<div class="confirm warp" :style="{background:newLayer.bg || init.bg}" v-show="newLayer.type === 'confirm'">
			<div class="layerwarp" :style="{top: msgtop + 'px'}">
				<p class="title">{{newLayer.title}}</p>
				<p class="word" v-for="item in newLayer.msg" :key="item">{{item}}</p>
				<div class="btnwarp">
					<p class="btns" @click="close">取消</p>
					<p class="btns" @click="confirmFunc">确定</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Layer',
	props: ['layer'],
	data () {
		return {
			init: {
				time: 5000,
				bg: 'rgba(0,0,0,0.5)'
			},
			newLayer: {},
			msgtop: 0
		}
	},
	watch: {
		layer (curVal, oldVal) {
			this.newLayer =  curVal
			this.layerFunc(this.newLayer.type)
		}
	},
	methods: {
		layerFunc (type) {
			switch (type) {
			case 'msg':
				this.layerTop(type)
				setTimeout(() => {
					this.newLayer.type = ''
				}, this.newLayer.time || this.init.time)
				break
			case 'alert':
				this.layerTop(type)
				break
			case 'confirm':
				this.layerTop(type)
				break
			}
		},
		layerTop (type) {
			switch (type) {
			case 'msg':
				this.msgtop = (document.body.clientHeight - 36 * this.newLayer.msg.length) * 0.5
				break
			case 'alert':
				this.msgtop = (document.body.clientHeight - 36 * this.newLayer.msg.length - 116) * 0.5
				break
			case 'confirm':
				this.msgtop = (document.body.clientHeight - 36 * this.newLayer.msg.length - 116) * 0.5
				break
			}
		},
		close () {
			this.newLayer.type = ''
			this.$emit('close', true)
		},
		confirmFunc () {
			this.newLayer.type = ''
			this.$emit('confirm', true)
		}
	},
	mounted () {
	}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.warp {
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
}
.loading img {
	width: 60px;
	height: 24px;
	position: fixed;
	left: calc(50% - 30px);
	top: calc(50% - 12px);
}
.layerwarp {
	width: 70%;
	position: fixed;
	left: 15%;
	background: #ffffff;
}
.word {
	text-align: center;
	padding: 8px 0;
	font-size: 14px;
	margin: 0;
	height: 18px;
}
.title, .btn, .btns {
	margin: 0;
	padding: 8px 0;
	background: #f2efef;
	font-size: 14px;
}
.title {
	padding-left: 20px;
	margin-bottom: 20px;
	border-bottom: 1px solid #cfcfcf;
}
.btn, .btnwarp {
	margin-top: 20px;
	text-align: center;
	border-top: 1px solid #cfcfcf;
}
.btns {
	float: left;
	width: calc(50% - 1px);
}
.btns:first-child {
	border-right: 1px solid #cfcfcf;
}
</style>
