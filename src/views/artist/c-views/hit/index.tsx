import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const ArtistHit: FC<IProps> = () => {
  return <div>ArtistHit</div>
}
export default memo(ArtistHit)
