// pages/detail-search/index.js
import {getHotWords, getSearchWords, getSearchSong} from '../../service/api_search'

Page({
  data: {
    hotWords: [],
    searchList: [],
    searchValue: '',
    searchSong: [],
  },

  onLoad(options) {
    this.getPageData()
  },

  getPageData() {
    getHotWords().then(res => {
      this.setData({hotWords: res.result.hots})
    })
  },

  // 联想词数据获取
  inputSearch(event) {
    const keywords = event.detail
    if(keywords) {
      this.setData({searchValue: keywords})
      getSearchWords(keywords).then(res => {
        this.setData({searchList: res.result.allMatch})
        console.log(this.data.searchList);
      })
    }else {
      this.setData({searchValue: []})
      this.setData({searchSong: []})
    }
  },

  // 回车搜索
  getSearch() {
    const keywords = this.data.searchValue;
    console.log(keywords);
    getSearchSong(keywords).then(res => {
      this.setData({searchSong: res.result.songs})
      console.log(this.data.searchSong);
    })
  },

  handleTagClick(event) {
    if(event.currentTarget.dataset.item.keyword) {
      this.setData({searchValue: event.currentTarget.dataset.item.keyword})
    }else {
      this.setData({searchValue: event.currentTarget.dataset.item.first})
    }
    getSearchSong(this.data.searchValue).then(res => {
      this.setData({searchSong: res.result.songs})
      console.log(this.data.searchSong);
    })
  },

  onCancel() {
    this.setData({searchValue: []})
    this.setData({searchSong: []})
  }

})