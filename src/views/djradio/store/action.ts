import hyRequest from '@/service'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  changeDjRadioAction,
  changeDjProgramsAction,
  changeProgramDetailAction,
  changeDjProgramsCommentAction
} from '.'

export const getDjRadioApi = (id: number) =>
  hyRequest.get({ url: '/dj/detail?rid=' + id })
export const fetchDjRadioAction = createAsyncThunk<void, number>(
  'djradio',
  async (id, { dispatch }) => {
    const res = await getDjRadioApi(id)
    dispatch(changeDjRadioAction(res.data))
  }
)

export const getDjProgramApi = (id: number) =>
  hyRequest.get({ url: '/dj/program?rid=' + id })
export const fetchDjProgramAction = createAsyncThunk<void, number>(
  'djprogram',
  async (id, { dispatch }) => {
    const res = await getDjProgramApi(id)
    console.log(res.programs)
    dispatch(changeDjProgramsAction(res.programs))
  }
)

export const getDjProgramDetailApi = (id: number) =>
  hyRequest.get({
    url: `/dj/program/detail?id=${id}`
  })

export const fetchDjProgramDetailAction = createAsyncThunk<void, number>(
  'djprogramdetail',
  async (id, { dispatch }) => {
    const res = await getDjProgramDetailApi(id)
    dispatch(changeProgramDetailAction(res.program))
  }
)

/**
 * 获取电台节目评论
 */
export const getDjProgramCommentApi = (id: number) =>
  hyRequest.get({
    url: `/comment/dj?id=${id}`
  })

export const fetchDjProgramCommentAction = createAsyncThunk<void, number>(
  'djprogramcomment',
  async (id, { dispatch }) => {
    const res = await getDjProgramCommentApi(id)
    dispatch(changeDjProgramsCommentAction(res))
  }
)
