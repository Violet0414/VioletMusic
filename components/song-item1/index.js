// components/song-item1/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },


  data: {

  },


  methods: {
    linkPlayer(event) {
      const id = event.currentTarget.dataset.item.id
      wx.navigateTo({
        url: '/pages/music-player/index?id=' + id,
      })
    }
  }
})
