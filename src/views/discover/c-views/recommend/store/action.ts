import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTopListDetail, getHotRecommendApi } from '../service/recommend'
import {
  changeGetThreePlaylistAction,
  changeGetHotRecommendListAction
} from './recommend'

export const fetchGetThreePlaylistAction = createAsyncThunk(
  'playlist/fetchGetThreePlaylist',
  async (_, { dispatch }) => {
    const ids = [19723756, 3779629, 2884035]
    const result = await Promise.all(
      ids.map(async (id) => await getTopListDetail(id))
    )
    dispatch(changeGetThreePlaylistAction(result))
  }
)

export const fetchGetHotRecommendAction = createAsyncThunk<void, number>(
  'fetchGetHotRecommend',
  async (limit, { dispatch }) => {
    const res = await getHotRecommendApi(limit)
    dispatch(changeGetHotRecommendListAction(res.result))
  }
)
