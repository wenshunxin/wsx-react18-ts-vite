import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { fetchGetDjCateListAction } from '../../store/action'
import { UlWrapper } from './style'
import { useSearchParams } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const DjHeader: FC<IProps> = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  const dispatch = useAppDispatch()
  const { djCateList = [] } = useAppSelector(
    (state) => state.dj,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetDjCateListAction())
  }, [])
  return (
    <UlWrapper className="flex flex-wrap">
      {djCateList.map((item) => {
        return (
          <li key={item.id}>
            <a
              href={`#/discover/djradio/category?id=${item.id}`}
              className={item.id == id ? 'active' : ''}
            >
              <div
                style={{
                  backgroundImage: `url(${item.picWebUrl})`
                }}
              ></div>
              <i>{item.name}</i>
            </a>
          </li>
        )
      })}
    </UlWrapper>
  )
}
export default memo(DjHeader)
