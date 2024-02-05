import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { PlayListWrapper } from './style'
import PlaylistMain from './c-cpns/playlist-main'
interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  return (
    <PlayListWrapper className="wrap-v2 wrap4">
      <PlaylistMain />
    </PlayListWrapper>
  )
}
export default memo(PlayList)
