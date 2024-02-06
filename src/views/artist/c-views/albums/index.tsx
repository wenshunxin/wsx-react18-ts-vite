import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const ArtistAlbums: FC<IProps> = () => {
  return <div>ArtistAlbums</div>
}
export default memo(ArtistAlbums)
