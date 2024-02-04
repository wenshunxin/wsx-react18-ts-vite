import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import qs from 'qs'
import {
  changeGetDjCateListAction,
  changeGetDjRecommendAction,
  changeGetDjHotAction,
  changeGetDjRecommendProgramListAction,
  changeGetDjTopListAction,
  changeGetDjDefaultRecommendAction
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

/**
 * 热门带台
 */
export const getDjRecommendProgramApi = (limit: number) =>
  hyRequest.get({ url: '/program/recommend?limit=' + limit })
export const fetchGetDjRecommendProgramAction = createAsyncThunk<void, number>(
  'djRecommend',
  async (limit, { dispatch }) => {
    const res = await getDjRecommendProgramApi(limit)
    dispatch(changeGetDjRecommendProgramListAction(res.programs))
  }
)
/**
 * 节目排行榜
 */
export const getDjTopListApi = (limit: number) =>
  hyRequest.get({ url: `/dj/program/toplist?limit=${limit}` })

export const fetchGetDjTopListAction = createAsyncThunk<void, number>(
  'djTopList',
  async (limit, { dispatch }) => {
    const res = await getDjTopListApi(limit)
    dispatch(changeGetDjTopListAction(res.toplist))
  }
)

/**
 * default页面 推荐电台
 */
export const getDefaultRecommendDjApi = () =>
  hyRequest.get({ url: '/dj/category/recommend' })

export const fetchGetDefaultRecommendDjAction = createAsyncThunk<void, void>(
  'defaultRecommendDj',
  async (_, { dispatch }) => {
    const res = await getDefaultRecommendDjApi()
    dispatch(changeGetDjDefaultRecommendAction(res.data))
  }
)
