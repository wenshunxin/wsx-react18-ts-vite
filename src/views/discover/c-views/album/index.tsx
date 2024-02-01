import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlbumWrapper } from './style'
import AlbumHeader from './c-cpns/album-header'
interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  return (
    <AlbumWrapper className="wrap-v2">
      <AlbumHeader title={'热门新碟'} />
      <AlbumHeader
        title={'全部新碟'}
        list={['全部', '华语', '欧美', '韩国', '日本']}
      />
    </AlbumWrapper>
  )
}
export default memo(Album)
