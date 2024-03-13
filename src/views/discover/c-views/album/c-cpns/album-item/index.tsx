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
        <a href={`#/album?id=${artist.id}`}>
          <div className="relative w-130px">
            <img src={getImgUrl(picUrl, 130)}></img>
            <i className="sprite_icon"></i>
          </div>
        </a>
      </div>
      <div>
        <a className="line-clamp-1" href={`#/album?id=${artist.id}`}>
          {name}
        </a>
        <p>
          <a className="text-[#666]">{artist?.name}</a>
        </p>
      </div>
    </AlbumItemWrap>
  )
}
export default memo(AlbumItem)
