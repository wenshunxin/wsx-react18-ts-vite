import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeGetPlaylistDetail } from '.'
/**
 * 详情
 */
export const getPlaylistDetailApi = (id: number) => {
  return hyRequest.get({ url: `/playlist/detail?id=${id}` })
}

export const fetchGetPlaylistDetailAction = createAsyncThunk<void, number>(
  'playlistDetail',
  async (id, { dispatch }) => {
    const res = await getPlaylistDetailApi(id)
    dispatch(changeGetPlaylistDetail(res.playlist))
  }
)
