import { createSlice } from '@reduxjs/toolkit'
interface IState {
  userInfo: any
}
const initialState: IState = {
  userInfo: {}
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserInfoAction: (state, { payload }) => {
      state.userInfo = payload
    }
  }
})

export const { changeUserInfoAction } = userSlice.actions
export default userSlice.reducer
