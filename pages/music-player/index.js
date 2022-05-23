// pages/music-player/index.js
import {getSongDetail} from '../../service/api_player'

Page({
  data: {
    id: 0,
    songData: []
  },

  onLoad(options) {
    const id = options.id
    this.setData({id: id})
    console.log(this.data.id);
    this.getPageData(id)
  },


  // 网络请求
  getPageData(id) {
    getSongDetail(id).then(res => {
      this.setData({songData: res.songs[0]})
      console.log(this.data.songData);
    })
  }
})