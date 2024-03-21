/**
 * mv详情
 */

import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeMvDataAction, changeHotCommentAction } from './index'

export const mvDetailApi = (mvid: number) =>
  hyRequest.get({
    url: '/mv/detail?mvid=' + mvid
  })

export const fetchMvDetailAction = createAsyncThunk(
  'mv-detail',
  async (mvId: number, { dispatch }) => {
    const res = await mvDetailApi(mvId)
    const res2 = await mvUrlApi(mvId)
    dispatch(
      changeMvDataAction({
        ...res.data,
        videoUrl: res2.data.url
      })
    )
  }
)

/**
 * 获取视频链接地址
 */
export const mvUrlApi = (id: number) =>
  hyRequest.get({
    url: `/mv/url?id=${id}&r=1080`
  })

/**
 * 获取mv详情
 */
export const mvCommentApi = (id: number) =>
  hyRequest.get({
    url: `/comment/hot?id=${id}&type=1`
  })

export const fetchMvCommentAction = createAsyncThunk(
  'mv-comment',
  async (id: number, { dispatch }) => {
    const res = await mvCommentApi(id)
    dispatch(
      changeHotCommentAction({
        hotComments: res.hotComments,
        total: res.total
      })
    )
  }
)
