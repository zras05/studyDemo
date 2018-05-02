//welcome.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isWel: 0, // 0 为 首次欢迎页未显示， 1 为 以显示
    isSkip: 0,
    skipSecond: 4,
    skip: {
      start: null,
      end: null
    }
  },
  onLoad: function () {
    wx.getStorage({
      key: 'isWelcome',
      success: (res) => {
        this.setData({
          isWel: res.data
        })
        if (res.data == 1) {
          this.second()
        }
      },
      fail: (res) => {
        this.setData({
          isWel: false
        })
      }
    })
  },
  second: function (clear) {
    let timer = null
    timer = setTimeout(() => {
      let num = this.data.skipSecond
      if (num > 0) {
        num--
        this.setData({
          skipSecond: num
        })
        this.second()
      } else {
        clearTimeout(timer)
        this.toIndex()
      }
    }, 1000)
  },
  cleartime: function () {
    this.setData({
      skipSecond: 0
    })
  },
  toIndex: function () {
    wx.setStorage({
      key: 'isWelcome',
      data: 1,
      success: function (res) {
      }
    })
    wx.redirectTo({
      url: '../login/login'
    })
  },
  skipmove: function (event) {
    if (this.data.skip.start == null) {
      this.data.skip.start = event.touches[0].pageX
    } else {
      this.data.skip.end = event.touches[0].pageX
    }
  },
  skipend: function () {
    let diff = this.data.skip.end - this.data.skip.start
    let skip = this.data.isSkip
    if (diff < 0) {
      if (skip < 2) {
        skip++
        this.setData({
          isSkip: skip
        })
      } else {
        this.toIndex()
      }
    } else {
      if (skip > 0) {
        skip--
        this.setData({
          isSkip: skip
        })
      } else {
        return false
      }
    }
  }
})