import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const AlbumArea: FC<IProps> = () => {
  return <div>AlbumArea</div>
}
export default memo(AlbumArea)
