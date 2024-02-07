import { createSlice } from '@reduxjs/toolkit'

interface IState {
  artistDetail: any
  artistHit: any[]
  artistAlbum: any[]
  albumSize: number
  artistMv: any[]
  artistDesc: any
}
const initialState: IState = {
  artistDetail: {},
  artistHit: [],
  artistAlbum: [],
  albumSize: 0,
  artistMv: [],
  artistDesc: {}
}
export const ArtistDetailSlice = createSlice({
  name: 'ArtistDetail',
  initialState,
  reducers: {
    changeArtistDetailAction: (state, action) => {
      state.artistDetail = action.payload
    },
    changeArtistHitAction(state, { payload }) {
      state.artistHit = payload
    },
    changeArtistAlbumAction(state, { payload }) {
      state.artistAlbum = payload.hotAlbums
      state.albumSize = payload.albumSize
    },
    changeArtistMvAction(state, { payload }) {
      state.artistMv = payload
    },
    changeArtistDescAction(state, { payload }) {
      state.artistDesc = payload
    }
  }
})
export const {
  changeArtistDetailAction,
  changeArtistHitAction,
  changeArtistAlbumAction,
  changeArtistMvAction,
  changeArtistDescAction
} = ArtistDetailSlice.actions
export default ArtistDetailSlice.reducer
