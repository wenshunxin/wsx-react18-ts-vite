import { createSlice } from '@reduxjs/toolkit'

interface IState {
  artistList: any[]
  topArtistList: any[]
}

const initialState: IState = {
  artistList: [],
  topArtistList: []
}

const ArtistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    changeArtistListAction(state, { payload }) {
      state.artistList = payload
    },
    changeTopArtistListAction(state, { payload }) {
      state.topArtistList = payload
    }
  }
})
export const { changeArtistListAction, changeTopArtistListAction } =
  ArtistSlice.actions
export default ArtistSlice.reducer
