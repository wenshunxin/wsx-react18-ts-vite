import { memo, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { Slider, Tooltip, message } from 'antd'
import {
  PlayerBarWrapper,
  BarControl,
  BarPlayerInfo,
  BarOperator
} from './style'
import { NavLink } from 'react-router-dom'
import {
  shallowEqualApp,
  useAppDispatch,
  useAppSelector
} from '@/store/index.ts'
import { formatMinuteSecond } from '@/utils/format-utils.ts'
import {
  changeLyricIndexAction,
  changePlayModeAction,
  changeShowPlayMenuAction,
  changeMusicAction
} from '../store'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const dispatch = useAppDispatch()
  const {
    currentSong,
    lyrics,
    lyricIndex,
    playMode,
    playSongList,
    showPlayMenu
  } = useAppSelector((state) => state.player, shallowEqualApp)

  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  const [volume, setVolume] = useState(100)
  const [showVolume, setShowVolume] = useState(false)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLock, setIsLock] = useState(false)
  useEffect(() => {
    const bodyHeight = document.body.offsetHeight
    const handleMouseMove = (event: any) => {
      setMousePosition({
        x: event.clientX,
        y: bodyHeight - event.clientY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    audioRef.current!.src = `https://music.163.com/song/media/outer/url?id=${currentSong?.id}.mp3`
    audioRef.current!.volume = volume / 100
    audioRef
      .current!.play()
      .then(() => {
        setIsPlaying(true)
        console.log('播放成功!')
      })
      .catch(() => {
        setIsPlaying(false)
        console.log('播放失败!')
      })

    setDuration(currentSong?.dt)
  }, [currentSong])

  function handleUpdateTime() {
    const currentTime = audioRef.current?.currentTime || 0
    if (!isSliding) {
      setCurrentTime(currentTime)
      const progress = ((currentTime * 1000 || 0) / duration) * 100
      setProgress(progress)
    }

    /** 匹配歌词 */
    /** 当前播放的事件 */
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime * 1000) {
        index = i - 1
        break
      }
    }

    /** 匹配了当前索引 */
    if (lyricIndex !== index) {
      dispatch(changeLyricIndexAction(index))
      const currentLyric = lyrics[index]
      if (currentLyric?.text) {
        message.open({
          className: 'lyric_content',
          content: currentLyric?.text,
          key: 'lyric',
          duration: 0
        })
      } else {
        message.destroy()
      }
    }
  }

  /** 播放按钮事件 */
  function handlePlayBtnClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))
    setIsPlaying(!isPlaying)
  }

  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  /** 点击进度条事件 */
  const handleSliderChanged = (value: number) => {
    const currentTime = ((value / 100) * duration) / 1000
    audioRef.current!.currentTime = currentTime
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
    audioRef
      .current!.play()
      .then(() => {
        setIsPlaying(true)
        console.log('播放成功!')
      })
      .catch(() => {
        setIsPlaying(false)
        console.log('播放失败!')
      })
  }

  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
    } else {
      handleChangeMusic(true)
    }
  }

  /** 滑动事件 */
  const handleSliderChanging = (value: number) => {
    setIsSliding(true)
    setProgress(value)

    /** 获取value 对象的事件 */

    const currentTime = ((value / 100) * duration) / 1000
    setCurrentTime(currentTime)
  }

  /** 切换播放模式 */
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) {
      newPlayMode = 0
    }
    dispatch(changePlayModeAction(newPlayMode))
  }

  /** 改变声音 */
  function handleChangeVolume(value: number) {
    audioRef.current!.volume = value / 100
    setVolume(value)
  }

  return (
    <PlayerBarWrapper
      className="sprite_playBar"
      mousePositionY={mousePosition.y}
      isLock={isLock}
    >
      <div className="wrap-v2 content h-full">
        <BarControl isPlaying={isPlaying}>
          <button
            className="sprite_playBar btn prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="sprite_playBar btn play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="sprite_playBar btn next"
            onClick={() => handleChangeMusic()}
          ></button>
        </BarControl>
        <BarPlayerInfo>
          <div className="image">
            <NavLink to={`/discover/player?id=${currentSong?.id}`}>
              <img src={currentSong?.al?.picUrl} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                defaultValue={progress}
                value={progress}
                tooltip={{ formatter: null }}
                onChangeComplete={handleSliderChanged}
                onChange={handleSliderChanging}
              />
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime * 1000)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="sprite_playBar btn favor"></button>
            <button className="sprite_playBar btn share"></button>
          </div>
          <div className="right sprite_playBar">
            <button
              className="sprite_playBar btn volume relative"
              onClick={() => setShowVolume(!showVolume)}
            >
              {showVolume && (
                <div className="absolute">
                  <Slider
                    vertical
                    value={volume}
                    onChange={handleChangeVolume}
                  />
                </div>
              )}
            </button>

            <Tooltip
              placement="top"
              title={
                playMode === 0 ? '顺序' : playMode === 1 ? '随机' : '单曲循环'
              }
            >
              <button
                className="sprite_playBar btn loop"
                onClick={handleChangePlayMode}
              ></button>
            </Tooltip>
            <button
              className="sprite_playBar btn playlist"
              onClick={() => dispatch(changeShowPlayMenuAction(!showPlayMenu))}
            >
              {playSongList.length}
            </button>
          </div>
        </BarOperator>
      </div>
      <audio
        id="audioID"
        ref={audioRef}
        onTimeUpdate={handleUpdateTime}
        onEnded={handleTimeEnded}
      ></audio>

      {/* lock */}
      <div className="sprite_playBar lock">
        {/* <a className="sprite_playbar lock_"></a> */}
        {isLock && (
          <div
            className="sprite_playBar lock_"
            onClick={() => setIsLock(!isLock)}
          ></div>
        )}
        {!isLock && (
          <div
            className="sprite_playBar lock_1"
            onClick={() => setIsLock(!isLock)}
          ></div>
        )}
      </div>
    </PlayerBarWrapper>
  )
}
export default memo(AppPlayerBar)
