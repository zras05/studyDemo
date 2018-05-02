//login.js
//获取应用实例
const app = getApp()
let userpsd = {
  user: 'zras',
  psd: 'zras'
}
Page({
  data: {
    alert: '',
    user: '',
    psd: ''
  },
  onLoad: function () {
  },
  user: function (event) {
    this.data.user = event.detail.value
  },
  psd: function (event) {
    this.data.psd = event.detail.value
  },
  toIndex: function () {
    if (this.data.user == userpsd.user && this.data.psd == userpsd.psd) {
      wx.redirectTo({
        url: '../index/index'
      })
    } else {
      this.setData({
        alert: '帐户名或密码错误'
      })
    }
  }
})
