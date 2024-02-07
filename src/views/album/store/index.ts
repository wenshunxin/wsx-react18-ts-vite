import { createSlice } from '@reduxjs/toolkit'

interface IState {
  songs: any[]
  album: any
}
const initialState: IState = {
  songs: [],
  album: {}
}

export const AlbumDetailSlice = createSlice({
  name: 'AlbumDetail',
  initialState,
  reducers: {
    changeAlbumDetailAction: (state, { payload }) => {
      state.album = payload.album
      state.songs = payload.songs
    }
  }
})

export const { changeAlbumDetailAction } = AlbumDetailSlice.actions

export default AlbumDetailSlice.reducer
