import Layer from './Layer'
export default {
	install: function (Vue, opt) {
		Vue.component('Layer', Layer)
		Vue.prototype.closeAlert = function (layer) {
			layer = {}
		}
	}
}
