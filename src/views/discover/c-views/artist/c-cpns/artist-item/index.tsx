import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { LiWrapper } from './style'
import { getImgUrl } from '@/utils'
interface IProps {
  picUrl: string
  name: string
  className: string
  children?: ReactNode
}

const ArtistItem: FC<IProps> = (props) => {
  const { picUrl, name, className } = props
  return (
    <LiWrapper className={`w-130px h-154px ${className}`}>
      {className != 'smi' && (
        <div>
          <img src={getImgUrl(picUrl, 130)} />
        </div>
      )}
      <p className="mt-8px">
        <a>
          {name}
          <i className="sprite_icon2"></i>
        </a>
      </p>
    </LiWrapper>
  )
}
export default memo(ArtistItem)
