import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlbumHeaderWrapper } from './style'
interface IProps {
  title: string
  list?: string[]
  children?: ReactNode
}

const AlbumHeader: FC<IProps> = (props) => {
  const list = props?.list ?? []
  return (
    <AlbumHeaderWrapper>
      <h3>{props.title}</h3>
      <div className="tab_list">
        {list.map((item, index) => {
          return (
            <div key={item}>
              <a href={`#/discover/album?area=${item}`}>{item}</a>
              {index === list?.length - 1 ? null : <span>|</span>}
            </div>
          )
        })}
      </div>
    </AlbumHeaderWrapper>
  )
}
export default memo(AlbumHeader)
