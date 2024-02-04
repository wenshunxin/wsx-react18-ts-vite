import { createSlice } from '@reduxjs/toolkit'

interface IState {
  djCateList: any[] // 电台分类列表
  djRecommend: any[] // 推荐电台
  djHot: any[] // 热门电台
  djHotTotal: number
  djRecommendProgramList: any[] // 推荐节目
  djTopList: any[] // 排行榜
}
const initialState: IState = {
  djCateList: [], // 电台分类列表
  djRecommend: [],
  djHot: [],
  djHotTotal: 0,
  djRecommendProgramList: [],
  djTopList: []
}
export const DjSlice = createSlice({
  name: 'DjSlice',
  initialState,
  reducers: {
    changeGetDjCateListAction(state, { payload }) {
      state.djCateList = payload
    },
    changeGetDjRecommendAction(state, { payload }) {
      state.djRecommend = payload
    },
    changeGetDjHotAction(state, { payload }) {
      state.djHot = payload.djRadios
      state.djHotTotal = payload.total
    },
    changeGetDjRecommendProgramListAction(state, { payload }) {
      state.djRecommendProgramList = payload
    },
    changeGetDjTopListAction(state, { payload }) {
      state.djTopList = payload
    }
  }
})

export const {
  changeGetDjCateListAction,
  changeGetDjRecommendAction,
  changeGetDjHotAction,
  changeGetDjRecommendProgramListAction,
  changeGetDjTopListAction
} = DjSlice.actions

export default DjSlice.reducer
