import { createSlice } from '@reduxjs/toolkit'

interface IState {
  djCateList: any[] // 电台分类列表
}
const initialState: IState = {
  djCateList: [] // 电台分类列表
}
export const DjSlice = createSlice({
  name: 'DjSlice',
  initialState,
  reducers: {
    changeGetDjCateListAction(state, { payload }) {
      state.djCateList = payload
    }
  }
})

export const { changeGetDjCateListAction } = DjSlice.actions

export default DjSlice.reducer
