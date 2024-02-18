import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  children?: ReactNode
}

const UserHome: FC<IProps> = () => {
  return (
    <div className="wrap-v2 mt-5px bg-color-[#fff] min-h-700px border-1 border-color-[#d3d3d3] border-b-0 p-40px">
      UserHome
    </div>
  )
}
export default memo(UserHome)
