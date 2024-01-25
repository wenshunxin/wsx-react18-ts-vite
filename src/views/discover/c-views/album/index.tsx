import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlbumWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return (
    <AlbumWrapper className="wrap-v2">
      <div className="album avatar"></div>
    </AlbumWrapper>
  )
}
export default memo(Album)
