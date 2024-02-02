import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import qs from 'qs'
import { changeArtistListAction, changeTopArtistListAction } from '.'

export const getArtistCatListApi = (params: any) => {
  return hyRequest.get({
    url: '/artist/list?' + qs.stringify(params)
  })
}

export const getTopArtistListApi = (params: any) => {
  return hyRequest.get({
    url: '/top/artists?' + qs.stringify(params)
  })
}

/**
 * 获取数据
 */
export const fetchGetArtistListAction = createAsyncThunk(
  'getArtistList',
  async (params: any, { dispatch }) => {
    const res = await getArtistCatListApi(params)
    dispatch(changeArtistListAction(res.artists))
  }
)

export const fetchGetTopArtistListAction = createAsyncThunk(
  'topArtistList',
  async (params: any, { dispatch }) => {
    const res = await getTopArtistListApi(params)
    dispatch(changeTopArtistListAction(res.artists))
  }
)
