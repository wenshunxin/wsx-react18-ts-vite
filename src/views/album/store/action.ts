import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeAlbumDetailAction } from '.'
/**
 * 专辑详情
 */
export const getAlbumDetailApi = (id: number) =>
  hyRequest.get({ url: `/album?id=${id}` })
export const fetchAlbumDetailAction = createAsyncThunk<void, number>(
  'albumDetail',
  async (id, { dispatch }) => {
    const res = await getAlbumDetailApi(id)
    dispatch(changeAlbumDetailAction(res))
  }
)
