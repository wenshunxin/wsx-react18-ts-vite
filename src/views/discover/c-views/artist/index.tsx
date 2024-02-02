import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistWrapper } from './style'
import { Outlet } from 'react-router-dom'
import ArtistCategories from './c-cpns/artist-categories'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <ArtistWrapper className="wrap-v2 flex">
      <div className="left h_full">
        <ArtistCategories />
      </div>
      <div className="right h_full">
        <Outlet />
      </div>
    </ArtistWrapper>
  )
}
export default memo(Artist)
