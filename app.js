// app.js
App({
  onLaunch() {
    const info = wx.getSystemInfoSync()
    console.log(info.screenWidth);
    this.globalData.screenHeight = info.screenHeight
    this.globalData.screenWidth = info.screenWidth
    console.log(this.globalData.screenWidth);
  },
  globalData: {
    screenWidth: 0,
    screenHeight: 0
  }
})
