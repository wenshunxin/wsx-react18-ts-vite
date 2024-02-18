import { shallowEqualApp, useAppSelector } from '@/store'
import { Image } from 'antd'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { getImgUrl } from '../../../../utils/tool'
import dayjs from 'dayjs'
import Buttons from '@/components/buttons'
interface IProps {
  children?: ReactNode
}

const AlbumHeader: FC<IProps> = () => {
  const { album: a = {}, songs } = useAppSelector(
    (state) => state.albumDetail,
    shallowEqualApp
  )
  return (
    <div>
      <div className="flex">
        <div
          className="w-209px h-177px sprite_cover background-position-1"
          style={{
            backgroundPosition: '0 -986px'
          }}
        >
          <Image src={getImgUrl(a?.picUrl, 177)}></Image>
        </div>
        <div className="ml-20px">
          <div className=" mb-20px">
            <div className="flex mb-12px">
              <i
                className="w-54px h-24px sprite_icon2"
                style={{
                  backgroundPosition: '0 -186px'
                }}
              ></i>
              <h2 className="text-[20px] leading-24px ml-10px">{a?.name}</h2>
            </div>
            <p className="mt-8px mb-3px">
              歌手：
              <a className="primary" href={`#/artist?id=${a?.artist?.id}`}>
                {a?.artist?.name}
              </a>
            </p>
            <p className="mt-8px mb-3px">
              发行时间：{dayjs(a.publishTime).format('YYYY-MM-DD')}
            </p>
            <p className="mt-8px mb-3px">发行公司：{a.company}</p>
          </div>
          <Buttons
            tracks={songs}
            subscribedCount={'收藏'}
            shareCount={a.info?.commentThread?.shareCount}
            commentCount={a.info?.commentThread?.commentCount}
          />
        </div>
      </div>
    </div>
  )
}
export default memo(AlbumHeader)
