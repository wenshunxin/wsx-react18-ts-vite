import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { MenuBtnWrapper } from '../menu-btn/style'
import { useAppDispatch } from '@/store'
import { handleChangePlaySongListAction } from '@/views/player/store/action'
interface IProps {
  subscribedCount: number | string
  shareCount: number
  commentCount: number
  tracks: any[] // 歌曲列表
  children?: ReactNode
}

const Buttons: FC<IProps> = (props) => {
  const { subscribedCount, shareCount, commentCount, tracks } = props
  const dispatch = useAppDispatch()

  const handlePlayAll = () => {
    dispatch(
      handleChangePlaySongListAction(tracks.filter((item) => item.fee != 1))
    )
  }
  return (
    <MenuBtnWrapper className="flex">
      <div className="sprite_button u-btn2-2">
        <i className="sprite_button flex items-center" onClick={handlePlayAll}>
          <em className="ply sprite_button"></em>
          <span>播放</span>
        </i>
      </div>
      <div className="sprite_button ml-6px u-btn pr-5px">
        <i className="sprite_button">({subscribedCount})</i>
      </div>
      <div className="sprite_button ml-6px u-btn u-btn1">
        <i className="sprite_button">({shareCount})</i>
      </div>
      <div className="sprite_button ml-6px u-btn u-btn2">
        <i className="sprite_button w-68px">下载</i>
      </div>
      <div className="sprite_button ml-6px u-btn u-btn3">
        <i className="sprite_button">({commentCount})</i>
      </div>
    </MenuBtnWrapper>
  )
}
export default memo(Buttons)
