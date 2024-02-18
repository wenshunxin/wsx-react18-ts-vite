import { createSlice } from '@reduxjs/toolkit'

interface IState {
  playlistDetail: any
  tracks: any[]
  hotComments: any[] // 热门评论
  comments: any[] // 最新评论
  total: number
}

const initialState: IState = {
  playlistDetail: {},
  tracks: [],
  hotComments: [],
  comments: [],
  total: 0
}
export const PlaylistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    changeGetPlaylistDetail(state, { payload }) {
      state.playlistDetail = payload
      state.tracks = payload.tracks
    },
    changeGetPlaylistComment(state, { payload }) {
      state.hotComments = payload.hotComments
      state.comments = payload.comments
      state.total = payload.total
    }
  }
})

export const { changeGetPlaylistDetail, changeGetPlaylistComment } =
  PlaylistSlice.actions
export default PlaylistSlice.reducer
