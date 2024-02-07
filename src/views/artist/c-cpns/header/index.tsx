import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchArtistDetailAction } from '../../store/action'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Image, Tabs } from 'antd'
import { getImgUrl } from '@/utils'
interface IProps {
  children?: ReactNode
}

const ArtistHeader: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const id = searchParams.get('id') as unknown as number // 获取URL中的id参数
  const dispatch = useAppDispatch()
  const { artistDetail: d } = useAppSelector(
    (state) => state.artistDetail,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchArtistDetailAction(id))
  }, [])

  const items = [
    { name: '热门作品', href: `/artist`, id },
    { name: '所有专辑', href: `/artist/album`, id },
    { name: '相关MV', href: `/artist/mv`, id },
    { name: '艺人介绍', href: `/artist/desc`, id }
  ]

  return (
    <div className="-mt-20px">
      <div className="flex items-center">
        <h2 className="leading-34px text-[24px] text-[#333]">
          {d?.artist?.name}
        </h2>
        <div className="ml-20px text-[#999] text-[14px]">
          {d.artist?.alias.map((item: string, index: number) => (
            <span key={index}>{item};</span>
          ))}
        </div>
      </div>
      <Image
        preview={false}
        src={getImgUrl(d?.artist?.cover, 640, 300)}
      ></Image>
      <Tabs
        activeKey={location.pathname}
        items={items.map((item) => {
          return {
            key: item.href,
            label: <a href={`#${item.href}?id=${id}`}>{item.name}</a>
          }
        })}
      ></Tabs>
    </div>
  )
}
export default memo(ArtistHeader)
