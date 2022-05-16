// pages/detail-video/index.js
import {getMVurl, getMVdetail, getRelatedVideo} from '../../service/api_video'

Page({
  data: {
    mvURLinfo: {},
    mvDetail: {},
    relatedVideos: []
  },

  onLoad(options) {
    const id = options.id
    console.log(id);
    this.getPageData(id)
  },

  getPageData(id) {
    getMVurl(id).then(res => {
      this.setData({mvURLinfo: res.data})
    })
    getMVdetail(id).then(res => {
      this.setData({mvDetail: res.data})
    })
    getRelatedVideo(id).then(res => {
      this.setData({relatedVideos: res.data})
    })
  }
})