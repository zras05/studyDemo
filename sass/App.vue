<!-- 
	sass 测试页
	Created by zras 
	Time 2018-03-24
 -->

<template>
	<div id="sass">
		<div class="top">文档</div>
		<div class="nav">
			<ul>
				<li v-for='(item,i) in nav' :class="i === navIndex? 'navClicked':''" @click="changeNav(i)">{{item.nav}}</li>
			</ul>	
		</div>
		<div class="secondNav">
			<ul>
				<li v-for='(item,i) in navSecond' :class="i === navSecondIndex? 'navClicked':''" @click="changeSecondNav(i)">{{item.nav}}</li>
			</ul>	
		</div>
		<div class="content">
			<div class="sample">例句： str = Hello World, arr = [1, 2, 3]</div>
			<div class="cont">
				<p>方法：{{ cont.usage }}</p>
				<p>作用：{{ cont.effect }}</p>
				<p v-for="(item,i) in cont.sample">{{i % 2 === 0 ? '示例' : '结果'}}：{{ item }}</p>
			</div>
		</div>
	</div>
</template>
<script>
import sass from '../../../static/data/sass.js'

export default {
	name: 'app',
	data () {
		return {
			nav: {},
			navIndex: 0,
			navSecond: {},
			navSecondIndex: 0,
			cont: {}
		}
	},
	components: {},
	methods: {
		initNav (num) {
			this.nav = sass.nav
			this.navIndex = num
			this.navSecond = this.nav[num].children
			this.navSecondIndex = 0
			this.cont = this.navSecond[this.navSecondIndex].code
		},
		changeNav (num) {
			this.navIndex = num
			this.navSecond = this.nav[num].children
			this.navSecondIndex = 0
			this.cont = this.navSecond[this.navSecondIndex].code
		},
		changeSecondNav (num) {
			this.navSecondIndex = num
			this.cont = this.navSecond[num].code
		}
	},
	mounted () {
		this.initNav(0)
	}
}
</script>

<style lang="scss" scoped>
	$topheight: 60px;
	@mixin nav ($width: 1) {
		float: left;
		height: calc(100% - #{$topheight});
		width: 100px * $width;
	}
	@mixin linearGradient ($orientation: 180deg, $startColor: #214663, $endColor: #20323c) {
		background: -webkit-linear-gradient($orientation, $startColor, $endColor);
		background: -o-linear-gradient($orientation, $startColor, $endColor);
		background: -moz-linear-gradient($orientation, $startColor, $endColor);
		background: linear-gradient($orientation, $startColor, $endColor);
	}
	#sass {
		height: 100%;
	}
	.top {
		height: $topheight;
		color: #ffffff;
    	line-height: $topheight;
		padding-left: 20px;
		@include linearGradient(90deg);
	}
	.nav {
		@include nav(1);
		@include linearGradient();
		ul{
			margin: 0;
			padding: 0;
			li {
				list-style: none;
				padding: 30px 0;
				text-align: center;
				color: #22cdc4;
				border-left: 3px solid transparent;
				&:hover {
					background: #152b28;
					border-left: 3px solid #0bd7f2;
				}
			}
			.navClicked {
				background: #152b28;
				border-left: 3px solid #0bd7f2;
			}
		}
	}
	.secondNav {
		@include nav(2.2);
		background: #1f2b37;
		overflow: auto;
		ul {
			margin: 0;
			padding: 0;
			li {
				padding: 10px;
				list-style: none;
				font-size: 14px;
				color: #728e99;
				&:hover {
					color: #b6b9be;
					background: #1a2225;
				}
			}
			.navClicked {
			color: #b6b9be;
			background: #1a2225;
			}
		}
	}
	.content {
		float: left;
		height: calc(100% - #{$topheight});
		width: calc(100% - 320px);
	}
	.sample {
		background: #4ba5d7;
		height: 40px;
		line-height: 40px;
		color: #ffffff;
		padding-left: 20px;
	}
	.cont {
		margin-left: 20px;
	}
</style>
