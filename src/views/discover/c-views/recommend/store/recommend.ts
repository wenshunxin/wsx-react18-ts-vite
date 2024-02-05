import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners, getTopList, getTopListDetail } from '../service/recommend'

export const fetchGetBannerAction = createAsyncThunk(
  'banner',
  async (_, { dispatch }) => {
    const res = await getBanners()
    dispatch(getBannerAction(res.banners))
  }
)

export const fetchGetTopListAction = createAsyncThunk(
  'topList',
  async (_, { dispatch }) => {
    // 异步请求
    const res = await getTopList()
    dispatch(getTopListAction(res.list))
  }
)

export const fetchGetTopListDetailAction = createAsyncThunk(
  'topListDetail',
  async (id: number, { dispatch }) => {
    const res = await getTopListDetail(id)
    dispatch(getTopListSongsAction(res.playlist?.tracks))
    dispatch(getPlaylistAction(res.playlist))
  }
)

interface IBanner {
  imageUrl: string
}

interface IState {
  banners: IBanner[]
  topList: any[]
  topListSongs: any[]
  playlist: any
  threePlaylist: any[]
  hotRecommendList: any[]
}

const initialState: IState = {
  banners: [],
  topList: [],
  topListSongs: [],
  playlist: {},
  threePlaylist: [],
  hotRecommendList: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    getBannerAction(state, { payload }) {
      state.banners = payload
    },
    getTopListAction(state, { payload }) {
      state.topList = payload
    },
    getTopListSongsAction(state, { payload }) {
      state.topListSongs = payload
    },
    getPlaylistAction(state, { payload }) {
      state.playlist = payload
    },
    changeGetThreePlaylistAction(state, { payload }) {
      state.threePlaylist = payload
    },
    changeGetHotRecommendListAction(state, { payload }) {
      state.hotRecommendList = payload
    }
  }
})
export const {
  getBannerAction,
  getTopListAction,
  getTopListSongsAction,
  getPlaylistAction,
  changeGetThreePlaylistAction,
  changeGetHotRecommendListAction
} = recommendSlice.actions

export default recommendSlice.reducer
