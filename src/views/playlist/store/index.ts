import { createSlice } from '@reduxjs/toolkit'

interface IState {
  playlistDetail: any
  tracks: any[]
}

const initialState: IState = {
  playlistDetail: {},
  tracks: []
}
export const PlaylistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    changeGetPlaylistDetail(state, { payload }) {
      state.playlistDetail = payload
      state.tracks = payload.tracks
    }
  }
})

export const { changeGetPlaylistDetail } = PlaylistSlice.actions
export default PlaylistSlice.reducer
