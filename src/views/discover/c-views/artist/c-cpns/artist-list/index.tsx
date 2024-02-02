import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import ArtistItem from '../artist-item'
interface IProps {
  list: any[]
  children?: ReactNode
}

const ArtistList: FC<IProps> = (props) => {
  const { list } = props
  return (
    <ul className="mt-20px -ml-17px flex flex-wrap">
      {list.map((item, index) => {
        const className =
          index > 4 && index < 10 ? 'line' : index > 9 ? 'smi' : ''
        return (
          <ArtistItem
            key={item.id}
            {...item}
            className={className}
          ></ArtistItem>
        )
      })}
    </ul>
  )
}
export default memo(ArtistList)
