// pages/detial-songs/index.js
import {getBanners, getRecommend, getSongMenu} from '../../service/api_music'

Page({
  data: {
    showList: []
  },

  onLoad(options) {
    const rankName = options.rankName
    console.log(rankName);
    if(rankName == 'moreList') {
      getRecommend(0).then(res => {
        this.setData({showList: res.playlist.tracks.slice(0, 30)})
        console.log(this.data.showList);
      })
    }else {
      getRecommend(1).then(res => {
        this.setData({showList: res.playlist.tracks/slice(0, 30)})
      })
    }
  },

  onUnload() {

  },
})