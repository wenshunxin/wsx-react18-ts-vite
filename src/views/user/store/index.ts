import { createSlice } from '@reduxjs/toolkit'
interface IState {
  userInfo: any
  playlist: any[]
  follows: any[]
  fans: any[]
}
const initialState: IState = {
  userInfo: {},
  playlist: [],
  follows: [],
  fans: []
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserInfoAction: (state, { payload }) => {
      state.userInfo = payload
    },
    changePlaylistAction: (state, { payload }) => {
      state.playlist = payload
    },
    changeFollowsAction: (state, { payload }) => {
      state.follows = payload
    },
    changeFansAction: (state, { payload }) => {
      state.fans = payload
    }
  }
})

export const {
  changeUserInfoAction,
  changePlaylistAction,
  changeFollowsAction,
  changeFansAction
} = userSlice.actions
export default userSlice.reducer
