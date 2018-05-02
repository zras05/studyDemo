//index.js
//获取应用实例
const app = getApp()
let data = {
  5: {
    total: 6000,
    type: [
      {
        name: '交通',
        cost: 45,
        left: 0,
        top: 0
      },
      {
        name: '服饰',
        cost: 549,
        left: '-40px',
        top: 0
      },
      {
        name: '食物',
        cost: 1468,
        left: '-80px',
        top: 0
      },
      {
        name: '美容',
        cost: 2390,
        left: '-120px',
        top: 0
      },
      {
        name: '聚会',
        cost: 340,
        left: '-160px',
        top: 0
      },
      {
        name: '医疗',
        cost: 100,
        left: 0,
        top:'-40px'
      },
      {
        name: '水电',
        cost: 90,
        left: '-40px',
        top: '-40px'
      },
      {
        name: '话费',
        cost: 100,
        left: '-80px',
        top: '-40px'
      },
      {
        name: '礼物',
        cost: 134,
        left: '-120px',
        top: '-40px'
      },
      {
        name: '其他',
       cost: 200,
       left: '-160px',
       top: '-40px'
      }
    ]
  }
}
Page({
  data: {
    countdata: {}
  },
  onLoad: function () {
    let date = new Date()
    let month = date.getMonth() + 1
    let spend = 0
    let monthdata = JSON.parse(JSON.stringify(data[month]))
    monthdata.month = month
    for (let i in monthdata.type) {
      spend += monthdata.type[i].cost
    }
    monthdata.spend = spend
    let percent = parseInt(monthdata.spend / monthdata.total * 100)
    monthdata.percent = percent
    for (let i in monthdata.type) {
      monthdata.type[i].percent = (monthdata.type[i].cost / monthdata.spend * 100).toFixed(2);
    }
    this.setData({
      countdata: monthdata
    })
  },
  spendHistroy: function () {
    wx.navigateTo({
      url: '../histroy/histroy'
    })
  }
})
