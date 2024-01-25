import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <ArtistWrapper className="wrap-v2 mt-100px mb-100px" n={6}>
      <div className="content">
        <div className="item">
          <div className="avatar">
            <span>1212</span>
          </div>
        </div>
        <div className="item">
          <div className="avatar"></div>
        </div>
        <div className="item">
          <div className="avatar"></div>
        </div>
        <div className="item">
          <div className="avatar"></div>
        </div>
        <div className="item">
          <div className="avatar"></div>
        </div>
        <div className="item">
          <div className="avatar"></div>
        </div>
      </div>
    </ArtistWrapper>
  )
}
export default memo(Artist)
