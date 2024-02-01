import { createSlice } from '@reduxjs/toolkit'

interface IState {
  albumNewestList: any[] // 最新专辑
  albumList: any[] // 专辑列表
  albumListTotal: number
}

const initialState: IState = {
  albumNewestList: [],
  albumList: [],
  albumListTotal: 0
}
const AlbumSlice = createSlice({
  name: 'albumSlice',
  initialState,
  reducers: {
    changeAlbumNewestListAction(state, { payload }) {
      state.albumNewestList = payload
    },
    changeAlbumListAreaAction(state, { payload }) {
      const { total, albums } = payload
      state.albumList = albums
      state.albumListTotal = total
    }
  }
})
export const { changeAlbumNewestListAction, changeAlbumListAreaAction } =
  AlbumSlice.actions
export default AlbumSlice.reducer
