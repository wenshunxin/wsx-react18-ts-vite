import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  changeArtistDetailAction,
  changeArtistHitAction,
  changeArtistAlbumAction,
  changeArtistMvAction,
  changeArtistDescAction
} from '.'
import qs from 'qs'
/**
 * 获取歌手详情
 */
export const getArtistDetailApi = (id: number) =>
  hyRequest.get({ url: `/artist/detail?id=${id}` })

export const fetchArtistDetailAction = createAsyncThunk<void, number>(
  'ArtistDetail',
  async (id, { dispatch }) => {
    const res = await getArtistDetailApi(id)
    dispatch(changeArtistDetailAction(res.data))
  }
)

/**
 * 热门歌曲
 */
export const getArtistHitApi = (id: number) =>
  hyRequest.get({ url: `/artists?id=${id}` })
export const fetchArtistHitAction = createAsyncThunk<void, number>(
  'artistHit',
  async (id, { dispatch }) => {
    const res = await getArtistHitApi(id)
    dispatch(changeArtistHitAction(res.hotSongs))
  }
)

/**
 * 所有专辑
 */
interface IParams {
  id: number
  limit: number
  offset: number
}
export const getArtistAlbumApi = (params: IParams) =>
  hyRequest.get({ url: '/artist/album?' + qs.stringify(params) })
export const fetchArtistAlbumAction = createAsyncThunk<void, IParams>(
  'artistAlbum',
  async (params, { dispatch }) => {
    const res = await getArtistAlbumApi(params)
    dispatch(
      changeArtistAlbumAction({
        hotAlbums: res.hotAlbums,
        albumSize: res.artist.albumSize
      })
    )
  }
)

/**
 * 相关mv
 */
export const getRelatedAllMVApi = (params: IParams) =>
  hyRequest.get({ url: `/artist/mv?` + qs.stringify(params) })
export const fetchArtistMvAction = createAsyncThunk<void, IParams>(
  'artistMv',
  async (params, { dispatch }) => {
    const res = await getRelatedAllMVApi(params)
    dispatch(changeArtistMvAction(res.mvs))
  }
)

/**
 * 艺人介绍
 */
export const getArtistDescApi = (id: number) =>
  hyRequest.get({ url: `/artist/desc?id=${id}` })
export const fetchArtistDescAction = createAsyncThunk<void, number>(
  'artistDesc',
  async (id, { dispatch }) => {
    const res = await getArtistDescApi(id)
    dispatch(changeArtistDescAction(res))
  }
)
