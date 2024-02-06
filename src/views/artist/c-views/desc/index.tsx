import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const ArtistDesc: FC<IProps> = () => {
  return <div>ArtistDesc</div>
}
export default memo(ArtistDesc)
