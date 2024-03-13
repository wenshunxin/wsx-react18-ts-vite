import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  changeUserInfoAction,
  changePlaylistAction,
  changeFollowsAction,
  changeFansAction
} from '.'

/**
 * 个人详情
 */
export const getUserInfoApi = (id: number) =>
  hyRequest.get({ url: '/user/detail?uid=' + id })

export const fetchGetUserInfoAction = createAsyncThunk(
  'user/fetchGetUserInfoAction',
  async (id: number, { dispatch }) => {
    const res = await getUserInfoApi(id)
    dispatch(changeUserInfoAction(res))
  }
)

/**
 * 创建的歌单列表
 */
export const getUserPlaylistApi = (id: number) =>
  hyRequest.get({ url: `/user/playlist?uid=${id}` })

export const fetchUserPlayListAction = createAsyncThunk(
  'userPlaylist',
  async (id: number, { dispatch }) => {
    const res = await getUserPlaylistApi(id)
    dispatch(changePlaylistAction(res.playlist))
  }
)

/**
 * userfollows
 */
export const getUserfollowsApi = (id: number) =>
  hyRequest.get({ url: `/user/follows?uid=${id}` })

export const fetchUserFollowsAction = createAsyncThunk(
  'userFollows',
  async (id: number, { dispatch }) => {
    const res = await getUserfollowsApi(id)
    dispatch(changeFollowsAction(res.follow))
  }
)

/**
 * 获取当前用户的粉丝
 */
export const getUserFollowedApi = (id: number) =>
  hyRequest.get({ url: `/user/followeds?uid=${id}` })
export const fetchUserFollowedAction = createAsyncThunk(
  'userFollowed',
  async (id: number, { dispatch }) => {
    const res = await getUserFollowedApi(id)
    dispatch(changeFansAction(res.followeds))
  }
)
