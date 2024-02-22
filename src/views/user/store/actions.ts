import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeUserInfoAction } from '.'

/**
 * 个人详情
 */
export const getUserInfoApi = (id: number) =>
  hyRequest.get({ url: '/user/detail?uid=' + id })

export const fetchGetUserInfoAction = createAsyncThunk(
  'user/fetchGetUserInfoAction',
  async (id: number, { dispatch }) => {
    const res = await getUserInfoApi(id)
    console.log(res)
    dispatch(changeUserInfoAction(res))
  }
)
