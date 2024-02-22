import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { MainWrapper } from './style'
import { getImgUrl } from '@/utils'
import dayjs from 'dayjs'
import Buttons from '@/components/buttons'
interface IProps {
  detail: any
  tracks: any[]
  children?: ReactNode
}

const MainHeader: FC<IProps> = (props) => {
  const { detail: d, tracks } = props
  return (
    <MainWrapper>
      <div className="w-208px h-208px u-cover sprite_cover flex items-center justify-center">
        <img src={getImgUrl(d.coverImgUrl, 200)} className="w-200px h-200px" />
      </div>
      <div className="cnt ml-20px flex-1">
        <div className="hd flex items-start mb-12px">
          <i className="u-icn sprite_icon2"></i>
          <div className="tit ml-10px">
            <h2 className="text-[20px] leading-24px font-normal">{d.name}</h2>
          </div>
        </div>
        <div className="user flex items-center mb-20px">
          <a>
            <img src={getImgUrl(d.creator?.avatarUrl, 35)} />
          </a>
          <a
            className="ml-10px primary"
            href={`#/user/home?id=${d.creator?.userId}`}
          >
            {d.creator?.nickname}
          </a>
          <img
            src={getImgUrl(d.creator?.avatarDetail?.identityIconUrl, 13)}
            className="w-13px h-13px"
          />
          <span className="ml-15px text-[#999]">
            {dayjs(d.createTime).format('YYYY年MM月DD日')}创建
          </span>
        </div>

        <Buttons
          subscribedCount={d.subscribedCount}
          shareCount={d.shareCount}
          commentCount={d.commentCount}
          tracks={tracks}
        />
        <p className="mt-25px leading-18px text-[#666]">
          介绍：{d.description}
        </p>
      </div>
    </MainWrapper>
  )
}
export default memo(MainHeader)
