// pages/home-music/index.js
// import {rankingStore} from '../../store/ranking-store'

import {getBanners, getRecommend, getSongMenu} from '../../service/api_music'
import {selectorRect} from '../../utils/selector-rect'

Page({
  data: {
    bannerList: [],
    recommendList: [],
    topList: [],
    hotList: [],
    swiperHeight: 0,

    hotSong: [],
    newSong: [],
    upSong: []
  },

  onLoad(options) {
    this.getPageData()
    
    // 发起共享数据请求
    // rankingStore.dispatch("getRankingDataAction")
  },

  // 获取数据
  getPageData() {
    for(let i = 0; i < 4; i++){
      getRecommend(i).then(res => {
        switch(i) {
          case 0:
            this.setData({recommendList: res.playlist.tracks.slice(0,6)})
            break
          case 1:
            this.setData({hotSong: res.playlist.tracks.slice(0,3)})
            break
          case 2:
            this.setData({newSong: res.playlist.tracks.slice(0,3)})
            break
          case 3:
            this.setData({upSong: res.playlist.tracks.slice(0,3)})
            break
        }
      })
    }
    getBanners().then(res => {
      this.setData({bannerList: res.banners})
    }),
    getSongMenu().then(res => {
      this.setData({hotList: res.playlists})
    }),
    getSongMenu("华语").then(res => {
      this.setData({topList: res.playlists})
    })
  },

  // 事件处理
  handleSearch() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  handleMoreClick() {
    this.getDetialPage('moreList')
  },

  handleRankClick() {
    this.getDetialPage('hotList')
  },

  getDetialPage(rankName) {
    wx.navigateTo({
      url: `/pages/detial-songs/index?rankName=${rankName}&type=rank`,
    })
  },


  // 动态计算图片高度，做一个适配
  handleImgLoaded() {
    selectorRect('.swiper-image').then(res => {
      const rect = res[0]
      console.log(rect.height);
      this.setData({swiperHeight: rect.height})
    })
  },

  onUnload() {

  },


})