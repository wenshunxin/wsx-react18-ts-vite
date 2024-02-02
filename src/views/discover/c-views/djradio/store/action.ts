import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { changeGetDjCateListAction } from '.'
export const getDjCateListApi = () => hyRequest.get({ url: '/dj/catelist' })

export const fetchGetDjCateListAction = createAsyncThunk(
  'dj/fetchGetDjCateListAction',
  async (_, { dispatch }) => {
    // 1. 调用获取 dj 分类列表的接口
    const data = await getDjCateListApi()
    // 2. 存储到 redux 中
    dispatch(changeGetDjCateListAction(data.categories))
  }
)
