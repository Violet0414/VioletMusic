import myRequest from './index'

export function getSongDetail(ids) {
  return myRequest.get('/song/detail', {
    ids
  }) 
}


