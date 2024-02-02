import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import DjRecommend from '../dj-recommend'
import DjHot from '../dj-hot'
interface IProps {
  children?: ReactNode
}

const CategoryPage: FC<IProps> = () => {
  return (
    <div className="mt-20px">
      <DjRecommend />
      <DjHot />
    </div>
  )
}
export default memo(CategoryPage)
