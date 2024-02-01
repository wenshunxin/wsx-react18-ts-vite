import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlbumItemWrap } from './style'
import { getImgUrl } from '@/utils'
interface IProps {
  name: string
  picUrl: string
  artist: any
  children?: ReactNode
}

const AlbumItem: FC<IProps> = (props) => {
  const { name, picUrl, artist = { name: '' } } = props
  return (
    <AlbumItemWrap>
      <div className="sprite_cover ">
        <div className="relative w-130px">
          <img src={getImgUrl(picUrl, 130)}></img>
          <a className="sprite_icon"></a>
        </div>
      </div>
      <div>
        <p className="line-clamp-1">{name}</p>
        <p>
          <a className="text-[#666]">{artist?.name}</a>
        </p>
      </div>
    </AlbumItemWrap>
  )
}
export default memo(AlbumItem)
