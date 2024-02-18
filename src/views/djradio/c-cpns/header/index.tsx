import { shallowEqualApp, useAppSelector } from '@/store'
import { Button, Image, Space } from 'antd'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { getImgUrl } from '../../../../utils/tool'
interface IProps {
  children?: ReactNode
}

const DjRadioHeader: FC<IProps> = () => {
  const { dj = {} } = useAppSelector((state) => state.djDetail, shallowEqualApp)
  return (
    <div className="flex">
      <div className="w-208px h-208px flex items-center justify-center border-1 border-color-[#d3d3d3]">
        <Image src={getImgUrl(dj.picUrl, 200)} preview={false} />
      </div>
      <div className="ml-20px flex-1">
        <div className="flex mb-12px">
          <i
            className="w-55px h-24px sprite_icon2"
            style={{
              backgroundPosition: '0 -1014px'
            }}
          ></i>
          <h2 className="text-[20px] leading-24px ml-10px">{dj.name}</h2>
        </div>
        <div className="flex items-center mb-20px">
          <img src={getImgUrl(dj?.dj?.avatarUrl, 35)} />
          <a href={`#/user/home?id=${dj.dj?.userId}`} className="ml-10px">
            {dj.dj?.nickname}
          </a>
          <img
            src={getImgUrl(dj?.dj?.avatarDetail?.identityIconUrl, 15)}
            className="w-13px h-13px"
          />
        </div>
        <div className="mb-25px">
          <Space>
            <Button type="primary">订阅({dj.subCount})</Button>
            <Button type="default">播放全部</Button>
            <Button type="default">分享({dj.shareCount})</Button>
          </Space>
        </div>
        <div className="leading-18px text-[#666]">
          <a
            href={`#/discover/djradio/category?id=${dj.categoryId}`}
            className="text-[#cc0000] border-1 border-color-[#cc0000] px-4px mr-4px"
          >
            {dj.category}
          </a>
          {dj.desc}
        </div>
      </div>
    </div>
  )
}
export default memo(DjRadioHeader)
