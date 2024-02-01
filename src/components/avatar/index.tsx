import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlbumWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Avatar: FC<IProps> = () => {
  return (
    <AlbumWrapper>
      <div className="album avatar"></div>
    </AlbumWrapper>
  )
}
export default memo(Avatar)
