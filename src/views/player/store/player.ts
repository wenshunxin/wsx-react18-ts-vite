import { createSlice } from '@reduxjs/toolkit'
import { ILyrics } from '@/utils/parse-lyric'

interface IPlayerState {
  currentSong: any
  lyrics: ILyrics[] // 歌词列表
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
  showPlayMenu: boolean
  songDetail: any
  simPlaylist: any[]
  simSong: any[]
  isPlaying: boolean

  detailPageLyric: ILyrics[] // 歌曲页面详情
  detailPageDetail: any // 歌曲页面详情
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1,
  playMode: 0, // 0 :顺序 1:随机 2: 单曲循环
  showPlayMenu: false,
  songDetail: {},
  simPlaylist: [],
  simSong: [],

  detailPageLyric: [],
  detailPageDetail: {},

  isPlaying: false // 是否正在播放 true 播放
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // 修改当前歌曲
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changeShowPlayMenuAction(state, { payload }) {
      state.showPlayMenu = payload
    },
    changeSongDetailAction(state, { payload }) {
      state.songDetail = payload
    },
    changeSimPlaylistAction(state, { payload }) {
      state.simPlaylist = payload
    },
    changeSimSongAction(state, { payload }) {
      state.simSong = payload
    },
    changeSetPlayingAction(state, { payload }) {
      state.isPlaying = payload
    },
    changeDetailPageLyricAction(state, { payload }) {
      state.detailPageLyric = payload
    },
    changeDetailPageDetailAction(state, { payload }) {
      state.detailPageDetail = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,

  changeShowPlayMenuAction,
  changeSongDetailAction,
  changeSimPlaylistAction,
  changeSimSongAction,
  changeSetPlayingAction,
  changeDetailPageLyricAction,
  changeDetailPageDetailAction
} = playerSlice.actions

export default playerSlice.reducer
