export function selectorRect(selectorName) {
  return new Promise((resolve) => {
    const query = wx.createSelectorQuery()
    query.select(selectorName).boundingClientRect()
    query.selectViewport().scrollOffset()
    // query.exec(resolve)
    query.exec((res) => {
      resolve(res)
    })
  })
}