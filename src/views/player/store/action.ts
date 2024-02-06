import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  getSongLyric,
  getSongDetail,
  getCurrentSongDetail,
  getSimPlaylist,
  getSimSong
} from '../service/player'
import {
  changeLyricsAction,
  changePlaySongListAction,
  changeCurrentSongAction,
  changePlaySongIndexAction,
  changeLyricIndexAction,
  changeSongDetailAction,
  changeSimPlaylistAction,
  changeSimSongAction,
  changeSetPlayingAction,
  changeDetailPageLyricAction,
  changeDetailPageDetailAction
} from './player'
import { parseLyrics } from '@/utils/parse-lyric'
import { IRootState } from '@/store'
import { message } from 'antd'

/**
 * 获取当前歌曲详情页面歌曲的歌词相关信息
 */
export const fetchDetailPageLyricAction = createAsyncThunk(
  'currentSongLyric',
  async (id: number, { dispatch }) => {
    const lyric = await getSongLyric(id)
    const lyricStr = lyric?.lrc?.lyric
    dispatch(changeDetailPageLyricAction(parseLyrics(lyricStr)))
  }
)
export const fetchDetailPageSongDetailAction = createAsyncThunk(
  'detailPageSongDetail',
  async (id: number, { dispatch }) => {
    const res = await getSongDetail(id)
    if (res.songs.length) {
      const song = res.songs[0]
      dispatch(changeDetailPageDetailAction(song))
    }
  }
)

/**
 * 获取当前播放歌曲的歌词相关信息
 */
export const fetchCurrentSongLyric = createAsyncThunk(
  'currentSongLyric',
  async (id: number, { dispatch }) => {
    const lyric = await getSongLyric(id)
    const lyricStr = lyric?.lrc?.lyric
    dispatch(changeLyricsAction(parseLyrics(lyricStr)))
  }
)

/** 设置播放列表 */
export const handleChangePlaySongListAction = createAsyncThunk(
  'playSongList',
  async (playSongList: any[], { dispatch }) => {
    const song = playSongList?.[0]
    dispatch(changePlaySongListAction(playSongList))
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(0))
    /** 获取歌词数据 */
    dispatch(fetchCurrentSongLyric(song.id))
    /** 对歌词进行解析 */
  }
)

/** 改变歌曲 */
// 导出一个异步thunk函数，用于改变音乐
export const changeMusicAction = createAsyncThunk<
  void,
  boolean,
  { state: IRootState }
>('changeMusic', async (isNext, { getState, dispatch }) => {
  /** 获取新歌曲的索引 */
  const playSongList = getState().player.playSongList
  if (playSongList.length === 0) {
    message.open({
      content: '当前播放列表为空'
    })
    dispatch(changeSetPlayingAction(false))
    dispatch(changePlaySongIndexAction(-1))
    return
  }
  const playMode = getState().player.playMode
  const playSongIndex = getState().player.playSongIndex

  let newIndex = playSongIndex
  /** 随机索引 */
  // 如果播放模式为随机播放
  if (playMode === 1) {
    // 随机生成一个播放歌曲列表的索引
    newIndex = Math.floor(Math.random() * playSongList.length)
  } else {
    // 如果isNext为true，则索引加1，否则减1
    newIndex += isNext ? 1 : -1
    // 如果索引大于播放歌曲列表的长度，则重置为0
    if (newIndex > playSongList.length - 1) {
      newIndex = 0
    }
    // 如果索引小于0，则重置为播放歌曲列表的长度
    if (newIndex < 0) {
      newIndex = playSongList.length - 1
    }
  }
  const song = playSongList[newIndex]
  dispatch(changeCurrentSongAction(song))
  dispatch(changePlaySongIndexAction(newIndex))

  /** 获取歌词数据 */
  dispatch(fetchCurrentSongLyric(song.id))
  /** 对歌词进行解析 */
})

// 导出一个异步thunk函数，用于获取当前歌曲
export const fetchCurrentSongsAction = createAsyncThunk<
  void,
  number,
  { state: IRootState }
>('currentSong', async (id, { getState, dispatch }) => {
  /** 1、在列表中获取数据 */
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    /** 获取歌曲数据 */
    const res = await getSongDetail(id)
    if (res.songs.length) {
      const song = res.songs[0]
      dispatch(changeCurrentSongAction(song))
      const newPlayList = [...playSongList, song]
      dispatch(changePlaySongListAction(newPlayList))
      dispatch(changePlaySongIndexAction(newPlayList.length - 1))
    }
  } else {
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
  }
  dispatch(changeLyricIndexAction(-1))
  /** 获取歌词数据 */
  dispatch(fetchCurrentSongLyric(id))
  /** 对歌词进行解析 */
})

/**
 * 获取当前播放歌曲的详细信息
 */
export const fetchCurrentSongDetailAction = createAsyncThunk(
  'currentSong/detail',
  async (id: number, { dispatch }) => {
    const res = await getCurrentSongDetail(id)
    dispatch(changeSongDetailAction(res))
  }
)

/**
 * 获取相似歌曲
 */
export const fetchSimPlaylistAction = createAsyncThunk(
  'simPlaylist',
  async (id: number, { dispatch }) => {
    const res = await getSimPlaylist(id)
    dispatch(changeSimPlaylistAction(res?.playlists))
  }
)

export const fetchSimSongAction = createAsyncThunk(
  'simSong',
  async (id: number, { dispatch }) => {
    const res = await getSimSong(id)
    dispatch(changeSimSongAction(res?.songs))
  }
)
