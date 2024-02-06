import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const ArtistMv: FC<IProps> = () => {
  return <div>ArtistMv</div>
}
export default memo(ArtistMv)
