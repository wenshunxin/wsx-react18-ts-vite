import { memo, useState } from 'react'
import type { ReactNode, FC } from 'react'
import { SongsWrapper } from './style'

import PullDown from './c-cpns/pull-down'
interface IProps {
  children?: ReactNode
}

const Songs: FC<IProps> = () => {
  const [isShowPullDown, setIsShowPullDown] = useState(false)
  return (
    <SongsWrapper className="wrap-v2 bg-color-[#fff] p-[40px]">
      {/* 选择分类 */}
      <div className="relative flex justify-between items-start h-40px border-b-2px border-color-[#c20c0c] box-content">
        <div className="flex items-center">
          <div className="text-[24px]">全部</div>
          <div className="sprite_button">
            <a
              className="sprite_button flex items-center"
              onClick={() => setIsShowPullDown(!isShowPullDown)}
            >
              <span>选择分类</span>
              <i className="sprite_icon2"></i>
            </a>
          </div>
        </div>
        <div className="hot-btn sprite_button2">
          <a>热门</a>
        </div>
        <PullDown isShowPullDown={isShowPullDown} />
      </div>
    </SongsWrapper>
  )
}
export default memo(Songs)
