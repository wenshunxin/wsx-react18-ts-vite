import { memo, useEffect, useState } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../dj-title'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetDjHotAction } from '../../store/action'
import { useSearchParams } from 'react-router-dom'
import { getImgUrl } from '@/utils'
import HYPagination from '@/components/pagination'
interface IProps {
  children?: ReactNode
}

const DjHot: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { djHot = [], djHotTotal } = useAppSelector(
    (state) => state.dj,
    shallowEqualApp
  )

  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const [offset, setOffset] = useState(1)
  useEffect(() => {
    setOffset(1)
    getList()
  }, [id])
  useEffect(() => {
    getList()
  }, [offset])
  function getList() {
    dispatch(
      fetchGetDjHotAction({ cateId: id, limit: 30, offset: (offset - 1) * 30 })
    )
  }

  return (
    <div className="mt-20px">
      <DjTitle title={'电台排行榜'}>
        <div className="">12121</div>
      </DjTitle>
      <ul className="-ml-30px flex flex-wrap">
        {djHot.map((item, index) => {
          return (
            <li
              key={index}
              className="w-435px h-120px py-20px ml-30px border-b-1 flex box-content border-color-[#e7e7e7]"
            >
              <a href={`#/djradio?id=${item.id}`}>
                <img src={getImgUrl(item.picUrl, 120)} />
              </a>
              <div className="ml-20px">
                <h2 className="leading-64px text-[#333] font-bold text-[18px]">
                  <a href={`#/djradio?id=${item.id}`}>{item.name}</a>
                </h2>
                <div className="flex items-center">
                  <i
                    className="sprite_icon2 w-14px h-15px"
                    style={{
                      backgroundPosition: '-50px -300px'
                    }}
                  ></i>
                  <span className="ml-4px">{item.dj.nickname}</span>
                </div>
                <div className="mt-10px text-[#999]">
                  共1期 订阅{item.subCount}次
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <HYPagination
        currentPage={offset}
        total={djHotTotal}
        pageSize={30}
        onPageChange={(page: number) => setOffset(page)}
      ></HYPagination>
    </div>
  )
}
export default memo(DjHot)
