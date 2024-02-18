import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeGetPlaylistDetail, changeGetPlaylistComment } from '.'
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

/**
 * 相关推荐 /related/playlist?
 */
export const getRelatedPlaylistApi = (id: number) => {
  return hyRequest.get({ url: `/related/playlist?id=${id}` })
}

/**
 * 获取评论
 */

export const getPlaylistCommentApi = (id: number) => {
  return hyRequest.get({ url: `/comment/playlist?id=${id}` })
}
export const fetchGetPlaylistCommentAction = createAsyncThunk<void, number>(
  'playlistComment',
  async (id, { dispatch }) => {
    const res = await getPlaylistCommentApi(id)
    dispatch(
      changeGetPlaylistComment({
        hotComments: res.hotComments,
        comments: res.comments,
        total: res.total
      })
    )
  }
)
