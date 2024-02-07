import { createSlice } from '@reduxjs/toolkit'

interface IState {
  dj: any
  programs: any[]
  programDetail: any
}
const initialState: IState = {
  dj: {},
  programs: [],
  programDetail: {}
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
    }
  }
})

export const {
  changeDjRadioAction,
  changeDjProgramsAction,
  changeProgramDetailAction
} = DjRadioSlice.actions

export default DjRadioSlice.reducer
