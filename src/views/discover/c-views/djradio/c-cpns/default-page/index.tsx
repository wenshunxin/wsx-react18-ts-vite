import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import Recommend from './c-cpns/recomment'
import Rank from './c-cpns/rank'
import Station from './c-cpns/station'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetDefaultRecommendDjAction } from '../../store/action'
interface IProps {
  children?: ReactNode
}

const DefaultPage: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { djDefaultRecommend } = useAppSelector(
    (state) => state.dj,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetDefaultRecommendDjAction())
  }, [])
  return (
    <div>
      <div className="flex justify-between">
        <Recommend />
        <Rank />
      </div>
      <div>
        {djDefaultRecommend.map((item, index) => {
          return <Station key={index} {...item} />
        })}
      </div>
    </div>
  )
}
export default memo(DefaultPage)
