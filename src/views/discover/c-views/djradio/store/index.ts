import { createSlice } from '@reduxjs/toolkit'

interface IState {
  djCateList: any[] // 电台分类列表
  djRecommend: any[] // 推荐电台
  djHot: any[] // 热门电台
  djHotTotal: number
}
const initialState: IState = {
  djCateList: [], // 电台分类列表
  djRecommend: [],
  djHot: [],
  djHotTotal: 0
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
    }
  }
})

export const {
  changeGetDjCateListAction,
  changeGetDjRecommendAction,
  changeGetDjHotAction
} = DjSlice.actions

export default DjSlice.reducer
