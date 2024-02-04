import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTopListDetail } from '../service/recommend'
import { changeGetThreePlaylistAction } from './recommend'

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
