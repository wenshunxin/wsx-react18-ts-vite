import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { MenuBtnWrapper } from './style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { handleChangePlaySongListAction } from '@/views/player/store/action'
interface IProps {
  children?: ReactNode
}

const MenuBtn: FC<IProps> = () => {
  const { playlist = {}, topListSongs } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )

  const dispatch = useAppDispatch()

  const handlePlayAll = () => {
    dispatch(
      handleChangePlaySongListAction(
        topListSongs.filter((item) => item.fee !== 1)
      )
    )
  }

  return (
    <MenuBtnWrapper className="flex ">
      <div className="sprite_button u-btn2-2">
        <i className="sprite_button flex items-center" onClick={handlePlayAll}>
          <em className="ply sprite_button"></em>
          <span>播放</span>
        </i>
      </div>
      <div className="sprite_button ml-6px u-btn pr-5px">
        <i className="sprite_button">({playlist.subscribedCount})</i>
      </div>
      <div className="sprite_button ml-6px u-btn u-btn1">
        <i className="sprite_button">({playlist.shareCount})</i>
      </div>
      <div className="sprite_button ml-6px u-btn u-btn2">
        <i className="sprite_button">下载</i>
      </div>
      <div className="sprite_button ml-6px u-btn u-btn3">
        <i className="sprite_button">({playlist.commentCount})</i>
      </div>
    </MenuBtnWrapper>
  )
}
export default memo(MenuBtn)
