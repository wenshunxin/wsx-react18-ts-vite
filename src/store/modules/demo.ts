import { createSlice } from '@reduxjs/toolkit'

interface IState {
  count: number
  direction: 'left' | 'top' | 'right' | 'bottom' // 方向
}

const initialState: IState = {
  count: 0,
  direction: 'left'
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    changeCountAction: (state, { payload }) => {
      state.count += payload
    }
  }
})

export const { changeCountAction } = demoSlice.actions

export default demoSlice.reducer
