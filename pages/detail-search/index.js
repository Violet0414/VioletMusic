// pages/detail-search/index.js
import {getHotWords, getSearchWords} from '../../service/api_search'

Page({
  data: {
    hotWords: [],
    searchList: [],
    searchValue: ''
  },

  onLoad(options) {
    this.getPageData()
  },

  getPageData() {
    getHotWords().then(res => {
      this.setData({hotWords: res.result.hots})
    })
  },

  inputSearch(event) {
    const keywords = event.detail
    this.setData({searchValue: keywords})
    getSearchWords(keywords).then(res => {
      this.setData({searchList: res.result.allMatch})
      console.log(this.data.searchList);
    })
  },

  onCancel() {
    this.data.searchValue.length = 0
  }

})