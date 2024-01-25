import hyRequest from '@/service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCatListApi = () => hyRequest.get({ url: '/playlist/catlist' })

export const fetchGetActListAction = createAsyncThunk(
  'getActList',
  async (_, { dispatch }) => {
    // 1. 调用获取歌单的接口
    const res = await getCatListApi()
    // 2. 派发一个同步的action
    dispatch(changeCatListAction(res))
  }
)

interface IState {
  catList: any
}
const initialState: IState = {
  catList: {}
}
const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    changeCatListAction(state, { payload }) {
      state.catList = payload
    }
  }
})

export const { changeCatListAction } = songsSlice.actions

export default songsSlice.reducer
