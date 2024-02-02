import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../dj-title'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetDjRecommendAction } from '../../store/action'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const DjRecommend: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const dispatch = useAppDispatch()
  const { djRecommend = [] } = useAppSelector(
    (state) => state.dj,
    shallowEqualApp
  )
  useEffect(() => {
    // 获取推荐电台
    dispatch(fetchGetDjRecommendAction(id))
  }, [id])
  return (
    <div>
      <DjTitle title={'优秀新电台'}></DjTitle>
      <ul className="flex flex-wrap -ml-37px mt-20px">
        {djRecommend.map((item) => {
          return (
            <li key={item.name} className="w-150px ml-37px mb-20px">
              <img src={item.picUrl} alt="" />
              <p className="mt-8px">
                <a className="line-clamp-1">{item.name}</a>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default memo(DjRecommend)
