import myRequest from './index'

export function getBanners() {
  return myRequest.get("/banner", {
    type: 2
  })
}


export function getRecommend(idx) {
  return myRequest.get("/top/list", {
    idx
  })
}

export function getSongMenu(cat="全部", limit=6, offset=0) {
  return myRequest.get("/top/playlist", {
    cat,
    limit,
    offset
  })
}


