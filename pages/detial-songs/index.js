// pages/detial-songs/index.js
import {getBanners, getRecommend, getMenuData} from '../../service/api_music'

Page({
  data: {
    showList: [],
    title: '',
    nowType: '',
    topData: []
  },

  onLoad(options) {
    const type = options.type
    this.setData({nowType: type})
    if(type === 'menu') {
      const id = options.id
      getMenuData(id).then(res => {
        console.log(res);
        this.setData({title: res.playlist.name})
        this.setData({showList: res.playlist.tracks})
        this.setData({topData: res.playlist})
      })
    }else {
      const rankName = options.rankName
      this.setData({nowType: 'rank'})
      this.setData({title: '音乐列表'})
      console.log(rankName);
      if(rankName == 'moreList') {
        getRecommend(0).then(res => {
          this.setData({showList: res.playlist.tracks.slice(0, 30)})
          this.setData({topData: res.playlist})
        })
      }else if(rankName == 'hotList') {
        getRecommend(1).then(res => {
          this.setData({showList: res.playlist.tracks.slice(0, 30)})
          this.setData({topData: res.playlist})
        })
      }
    }
    
  },

  // 处理方法
  listItemClick(event) {
    const item = event.currentTarget.dataset.item
    console.log('点击了', item);
  },

  onUnload() {

  },
})