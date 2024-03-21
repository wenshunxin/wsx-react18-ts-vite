import { createSlice } from '@reduxjs/toolkit'
interface IState {
  mvData: any
  hotComments: any[]
  total: number
}
const initialState: IState = {
  mvData: {},
  hotComments: [],
  total: 0
}
export const mv = createSlice({
  name: 'mv',
  initialState,
  reducers: {
    changeMvDataAction(state, { payload }) {
      state.mvData = payload
    },
    changeHotCommentAction(state, { payload }) {
      state.hotComments = payload.hotComments
      state.total = payload.total
    }
  }
})
export const { changeMvDataAction, changeHotCommentAction } = mv.actions
export default mv.reducer
