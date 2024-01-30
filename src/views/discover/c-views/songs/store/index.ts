import hyRequest from '@/service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCatListApi = () => hyRequest.get({ url: '/playlist/catlist' })

export const fetchGetActListAction = createAsyncThunk(
  'getActList',
  async (_, { dispatch }) => {
    // 1. 调用获取歌单的接口
    const res = await getCatListApi()
    const { categories, sub } = res
    const catList = []

    const _style = (n: number) => {
      switch (n) {
        case 0:
          return {
            width: '23px',
            height: '23px',
            backgroundPosition: '-20px -735px'
          }
        case 1:
          return {
            width: '24px',
            height: '24px',
            backgroundPosition: '0 -60px'
          }
        case 2:
          return {
            width: '24px',
            height: '24px',
            backgroundPosition: '0 -88px'
          }
        case 3:
          return {
            width: '24px',
            height: '24px',
            backgroundPosition: '0 -117px'
          }
        case 4:
          return {
            width: '24px',
            height: '24px',
            backgroundPosition: '-0 -141px'
          }
        default:
          return {}
      }
    }

    for (const key in categories) {
      const list = sub.filter((item: any) => item.category === Number(key))
      catList.push({ name: categories[key], list, style: _style(Number(key)) })
    }
    // 2. 派发一个同步的action
    dispatch(changeCatListAction(catList))
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
