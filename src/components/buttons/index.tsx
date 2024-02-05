import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { MenuBtnWrapper } from '../menu-btn/style'
interface IProps {
  subscribedCount: number
  shareCount: number
  commentCount: number
  children?: ReactNode
}

const Buttons: FC<IProps> = (props) => {
  const { subscribedCount, shareCount, commentCount } = props
  return (
    <MenuBtnWrapper className="flex">
      <div className="sprite_button u-btn2-2">
        <i className="sprite_button flex items-center">
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
