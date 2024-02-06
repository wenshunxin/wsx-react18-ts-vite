import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { LiWrapper } from './style'
import { getImgUrl } from '@/utils'
interface IProps {
  picUrl: string
  name: string
  id: number | string // 歌手id
  className: string
  children?: ReactNode
}

const ArtistItem: FC<IProps> = (props) => {
  const { picUrl, name, className, id } = props
  return (
    <LiWrapper className={`w-130px h-154px ${className}`}>
      {className != 'smi' && (
        <div>
          <img src={getImgUrl(picUrl, 130)} />
        </div>
      )}
      <p className="mt-8px">
        <a href={`#/artist?id=${id}`}>
          {name}
          <i className="sprite_icon2"></i>
        </a>
      </p>
    </LiWrapper>
  )
}
export default memo(ArtistItem)
