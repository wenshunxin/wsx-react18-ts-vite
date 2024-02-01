import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeAlbumListAreaAction, changeAlbumNewestListAction } from '.'
interface IAparam {
  limit: number
  offset: number
  area?: string
}
export const albumNewestApi = () => hyRequest.get({ url: '/album/newest' })
export const albumListAreaApi = ({ limit, offset, area = '' }: IAparam) =>
  hyRequest.get({
    url: `/album/new?limit=${limit}&offset=${offset}&area=${area}`
  })

export const fetchGetAlbumNewestAction = createAsyncThunk(
  'albumNewest',
  async (_, { dispatch }) => {
    const res = await albumNewestApi()
    dispatch(changeAlbumNewestListAction(res.albums))
  }
)

export const fetchGetAlbumListAreaAction = createAsyncThunk<void, IAparam>(
  'albumListArea',
  async (data, { dispatch }) => {
    const res = await albumListAreaApi({ ...data })
    console.log(res)
    const { albums, total } = res
    dispatch(changeAlbumListAreaAction({ albums, total }))
  }
)
