import { shallowEqualApp, useAppSelector } from '@/store'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopDetailWrapper } from './style'
import dayjs from 'dayjs'
import MenuBtn from '@/components/menu-btn'
interface IProps {
  children?: ReactNode
}

const TopDetail: FC<IProps> = () => {
  const { playlist = {} } = useAppSelector(
    (state) => state.recommend,
    shallowEqualApp
  )
  return (
    <TopDetailWrapper className="flex">
      {/* 详情页 */}
      <div className="w-150px h-150px p-2px border-1 border-1-[#ccc]">
        <img src={playlist.coverImgUrl} />
      </div>
      <div className="ml-30px">
        <h2 className="mt-16px mb-4px text-[20px] font-normal">
          {playlist.name}
        </h2>
        <div className="flex items-center leading-35px mb-20px">
          <div className="sprite_icon2 u-icn-57 !mt-0"></div>
          <div className=" ml-6px text-[#666]">
            最近更新:{dayjs(playlist.updateTime).format('MM月DD日')}
          </div>
        </div>
        <MenuBtn></MenuBtn>
      </div>
    </TopDetailWrapper>
  )
}
export default memo(TopDetail)
