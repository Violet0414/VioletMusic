import {HYEventStore} from 'hy-event-store'
import {getRecommend} from '../service/api_music'

const rankingStore = new HYEventStore({
  state: {
    hotRanking: {}
  },
  action: {
    getRankingDataAction() {
      getRecommend(0).then(res => {
        console.log(res);
      })
    }
  }
})

export {
  rankingStore
}