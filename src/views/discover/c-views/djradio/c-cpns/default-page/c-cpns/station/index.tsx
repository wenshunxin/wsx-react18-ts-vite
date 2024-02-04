import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../../../dj-title'
import { getImgUrl } from '@/utils/tool'

interface IProps {
  categoryId: number
  categoryName: string
  radios: any[]
  children?: ReactNode
}

const Station: FC<IProps> = (props) => {
  const { categoryName, categoryId, radios = [] } = props
  const title = (
    <div>
      {categoryName} <span>-</span>电台
    </div>
  )
  return (
    <div className="mt-35px">
      <DjTitle title={title}>
        <a href={`#/discover/djradio/category?id=${categoryId}`}>更多</a>
      </DjTitle>
      <ul className="-ml-30px flex flex-wrap">
        {radios.map((item, index) => {
          return (
            <li
              key={index}
              className="flex ml-30px py-20px w-435px border-b-1 border-color-[#e7e7d5]"
            >
              <a>
                <img src={getImgUrl(item.picUrl, 120)} />
              </a>
              <div className="ml-20px">
                <h3 className="mt-16px pb-20px text-[18px] font-bold">
                  <a href={`#/djradio?id=${item.id}`}>{item.name}</a>
                </h3>
                <p className="text-[#999]">{item.rcmdText}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default memo(Station)
