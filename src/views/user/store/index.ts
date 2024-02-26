import { createSlice } from '@reduxjs/toolkit'
interface IState {
  userInfo: any
  playlist: any[]
  follows: any[]
}
const initialState: IState = {
  userInfo: {},
  playlist: [],
  follows: []
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
    }
  }
})

export const {
  changeUserInfoAction,
  changePlaylistAction,
  changeFollowsAction
} = userSlice.actions
export default userSlice.reducer
