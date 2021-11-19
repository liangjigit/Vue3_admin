export function localGet(key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key))
  } catch (error) {
    return value
  }
}

export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove(key) {
  window.localStorage.removeItem(key)
}

// 判断内容是否含有表情字符，现有数据库不支持。
export function hasEmoji(str = '') {
  const reg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g;
  return str.match(reg) && str.match(reg).length
}

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file'
// 多张图片上传
export const uploadImgsServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files'

export const pathMap = {
  login: '登录',
  introduce: '系统介绍',
  dashboard: '大盘数据',
  add: '添加商品',
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
  category: '分类管理',
  level2: '分类二级管理',
  level3: '分类三级管理',
  good: '商品管理',
  guest: '会员管理',
  order: '订单管理',
  order_detail: '订单详情',
  account: '修改账户'
}

export const getEcharts = () => {
  return {
    title: {
      text: '系统折线图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['新增注册', '付费用户', '活跃用户', '订单数', '当日总收入']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2021-03-11', '2021-03-12', '2021-03-13', '2021-03-14', '2021-03-15', '2021-03-16', '2021-03-17']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '新增注册',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '付费用户',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '活跃用户',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '订单数',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '当日总收入',
        type: 'line',
        stack: '总量',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
}