//histroy.js
import * as echarts from '../../ec-canvas/echarts';
let countdata = {}
countdata.data = [
  {
    'month': 1,
    'income': 7653,
    'expenditure': 6234
  },
  {
    'month': 2,
    'income': 7653,
    'expenditure': 6234
  },
  {
    'month': 3,
    'income': 5756,
    'expenditure': 6234
  },
  {
    'month': 4,
    'income': 4456,
    'expenditure': 6234
  },
  {
    'month': 5,
    'income': 2676,
    'expenditure': 6234
  },
  {
    'month': 6,
    'income': 5483,
    'expenditure': 6234
  },
  {
    'month': 7,
    'income': 7653,
    'expenditure': 6234
  }
]
const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
    },
    yAxis: {
      x: 'center',
      type: 'value'
    },
    series: [{
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    countdata: countdata
  },
  onReady() {

  },
  onLoad: function () {
  }
});
