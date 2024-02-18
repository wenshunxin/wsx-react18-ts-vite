import { createSlice } from '@reduxjs/toolkit'

interface IState {
  songs: any[]
  album: any
  hotComments: any[]
  total: number
  comments: any[]
}
const initialState: IState = {
  songs: [],
  album: {},
  hotComments: [],
  comments: [],
  total: 0
}

export const AlbumDetailSlice = createSlice({
  name: 'AlbumDetail',
  initialState,
  reducers: {
    changeAlbumDetailAction: (state, { payload }) => {
      state.album = payload.album
      state.songs = payload.songs
    },
    changeGetAlbumCommentAction(state, { payload }) {
      state.hotComments = payload.hotComments
      state.total = payload.total
      state.comments = payload.comments
    }
  }
})

export const { changeAlbumDetailAction, changeGetAlbumCommentAction } =
  AlbumDetailSlice.actions

export default AlbumDetailSlice.reducer
