// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'

Page({
  data: {
    topMV: [],
    hasMore: true
  },

  onLoad(options) {
    this.getTopMVData(0)
  },

  // 封装网络请求
  async getTopMVData(offset) {
    wx.showNavigationBarLoading()
    let newData = this.data.topMV
    const res = await getTopMV(offset)
    if(offset === 0) {
      newData = res.data
    }else {
      newData = newData.concat(res.data)
      this.setData({hasMore: res.hasMore})
    }
    this.setData({topMV: newData})
    wx.hideNavigationBarLoading()
    wx.stopPullDownRefresh()
  },

  // 封装事件处理
  itemClick(event) {
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: '/pages/detail-video/index?id=' + id,
    })
  },

  onPullDownRefresh() {
    wx.showToast({
      title: '刷呀刷呀~',
      icon: 'none',
      duration: 1500
    })
    this.getTopMVData(0)
  },

  onReachBottom() {
    if(!this.data.hasMore){
      wx.showToast({
        title: '再拉也拉不出来了！',
        icon: 'none',
        duration: 1800
      })
      return
    }
    this.getTopMVData(this.data.topMV.length)
  }
})