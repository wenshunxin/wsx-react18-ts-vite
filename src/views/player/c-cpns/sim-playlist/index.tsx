import { shallowEqualApp, useAppSelector } from '@/store'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { getImgUrl } from '../../../../utils/tool'
interface IProps {
  children?: ReactNode
}

const SimPlaylist: FC<IProps> = () => {
  const { simPlaylist } = useAppSelector(
    (state) => state.player,
    shallowEqualApp
  )
  return (
    <div>
      <div className="border-b-1px border-color-[#ccc] mb-20px">
        <h3 className="text-[#333] font-bold leading-23px">包含这首歌的歌单</h3>
      </div>
      {simPlaylist.map((item) => {
        return (
          <div key={item.name} className="flex mb-15px">
            <img src={getImgUrl(item.coverImgUrl, 50)} />
            <div className="ml-10px flex-1 overflow-hidden py-4px flex flex-col justify-between">
              <div className="truncate text-[14px] text-[#000]">
                {item.name}
              </div>
              <div className="text-[#666]">by {item?.creator?.nickname}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default memo(SimPlaylist)
