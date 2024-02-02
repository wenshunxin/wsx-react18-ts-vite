import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import qs from 'qs'
import {
  changeGetDjCateListAction,
  changeGetDjRecommendAction,
  changeGetDjHotAction
} from '.'
export const getDjCateListApi = () => hyRequest.get({ url: '/dj/catelist' })

/**
 * 优秀新电台
 */
export const getDjRecommendApi = (id: number) =>
  hyRequest.get({ url: '/dj/recommend/type?type=' + id })

export const getDjHotApi = (params: any) =>
  hyRequest.get({ url: '/dj/radio/hot?' + qs.stringify(params) })

export const fetchGetDjCateListAction = createAsyncThunk(
  'dj/fetchGetDjCateListAction',
  async (_, { dispatch }) => {
    // 1. 调用获取 dj 分类列表的接口
    const data = await getDjCateListApi()
    // 2. 存储到 redux 中
    dispatch(changeGetDjCateListAction(data.categories))
  }
)

export const fetchGetDjRecommendAction = createAsyncThunk<void, number>(
  'djRecommend',
  async (id, { dispatch }) => {
    const res = await getDjRecommendApi(id)
    dispatch(changeGetDjRecommendAction(res.djRadios))
  }
)

export const fetchGetDjHotAction = createAsyncThunk<void, any>(
  'djHot',
  async (params, { dispatch }) => {
    const res = await getDjHotApi(params)
    dispatch(changeGetDjHotAction({ djRadios: res.djRadios, total: res.count }))
  }
)
