import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchGetUserInfoAction } from '../store/actions'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const UserHome: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  /** 获取地址栏中的ID */
  const [searchParams] = useSearchParams()
  /** 类型转化为数字类型 */
  const id = searchParams.get('id') as unknown as number

  useEffect(() => {
    dispatch(fetchGetUserInfoAction(id))
  }, [])
  return (
    <div className="wrap-v2 mt-5px bg-color-[#fff] min-h-700px border-1 border-color-[#d3d3d3] border-b-0 p-40px">
      UserHome
    </div>
  )
}
export default memo(UserHome)
