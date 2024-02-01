import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeAlbumNewestListAction } from '.'

export const albumNewestApi = () => hyRequest.get({ url: '/album/newest' })

export const fetchGetAlbumNewestAction = createAsyncThunk(
  'albumNewest',
  async (_, { dispatch }) => {
    const res = await albumNewestApi()
    dispatch(changeAlbumNewestListAction(res.albums))
  }
)
