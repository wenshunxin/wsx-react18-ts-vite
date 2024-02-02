import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistWrapper } from './style'
import artist_categories from '@/assets/data/artist_categories.json'
import { useLocation } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const ArtistCategories: FC<IProps> = () => {
  const { pathname, search } = useLocation()

  return (
    <ArtistWrapper>
      {artist_categories.map((item, index) => {
        return (
          <div key={index} className="blk">
            <h3 className="tit">{item.title}</h3>
            <ul>
              {item.artists.map((artist, idx) => {
                return (
                  <li key={idx}>
                    <a
                      className={
                        artist.url === pathname + search ? 'active' : ''
                      }
                      href={`#${artist.url}`}
                    >
                      {artist.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </ArtistWrapper>
  )
}
export default memo(ArtistCategories)
