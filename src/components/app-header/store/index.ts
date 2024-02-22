import hyRequest from '@/service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getSearchApi = (keywords: string) =>
  hyRequest.get({
    url: '/search/suggest?keywords=' + keywords
  })

export const fetchGetSearchAction = createAsyncThunk(
  'search/fetchGetSearchAction',
  async (keywords: string, { dispatch }) => {
    const res = await getSearchApi(keywords)
    dispatch(changeSearchAction(res.result))
  }
)

interface IState {
  s: any
}
const initialState: IState = {
  s: {}
}
export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeSearchAction(state, { payload }) {
      state.s = payload
    }
  }
})

export const { changeSearchAction } = headerSlice.actions
export default headerSlice.reducer
