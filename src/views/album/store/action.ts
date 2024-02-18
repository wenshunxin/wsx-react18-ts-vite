import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeAlbumDetailAction, changeGetAlbumCommentAction } from '.'
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

/**
 * 专辑评论
 */
export const getAlbumCommentApi = (id: number) =>
  hyRequest.get({ url: '/comment/album?id=' + id })

export const fetchAlbumCommentAction = createAsyncThunk<void, number>(
  'albumComment',
  async (id, { dispatch }) => {
    const res = await getAlbumCommentApi(id)
    dispatch(changeGetAlbumCommentAction(res))
  }
)
