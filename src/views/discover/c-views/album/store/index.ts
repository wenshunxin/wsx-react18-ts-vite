import { createSlice } from '@reduxjs/toolkit'

interface IState {
  albumNewestList: any[] // 最新专辑
}

const initialState: IState = {
  albumNewestList: []
}
const AlbumSlice = createSlice({
  name: 'albumSlice',
  initialState,
  reducers: {
    changeAlbumNewestListAction(state, { payload }) {
      state.albumNewestList = payload
    }
  }
})
export const { changeAlbumNewestListAction } = AlbumSlice.actions
export default AlbumSlice.reducer
