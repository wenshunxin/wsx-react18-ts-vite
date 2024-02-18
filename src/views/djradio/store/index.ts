import { createSlice } from '@reduxjs/toolkit'

interface IState {
  dj: any
  programs: any[]
  programDetail: any
  hotComments: any[]
  total: number
  comments: any[]
}
const initialState: IState = {
  dj: {},
  programs: [],
  programDetail: {},
  hotComments: [],
  comments: [],
  total: 0
}
export const DjRadioSlice = createSlice({
  name: 'DjRadio',
  initialState,
  reducers: {
    changeDjRadioAction(state, { payload }) {
      state.dj = payload
    },
    changeDjProgramsAction(state, { payload }) {
      state.programs = payload
    },
    changeProgramDetailAction(state, { payload }) {
      state.programDetail = payload
    },
    changeDjProgramsCommentAction(state, { payload }) {
      state.hotComments = payload.hotComments
      state.total = payload.total
      state.comments = payload.comments
    }
  }
})

export const {
  changeDjRadioAction,
  changeDjProgramsAction,
  changeProgramDetailAction,
  changeDjProgramsCommentAction
} = DjRadioSlice.actions

export default DjRadioSlice.reducer
