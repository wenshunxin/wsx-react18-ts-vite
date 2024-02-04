import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../../../dj-title'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetDjTopListAction } from '../../../../store/action'
import { RankWrapper } from './style'
import { getImgUrl } from '@/utils'
interface IProps {
  children?: ReactNode
}

const Rank: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { djTopList } = useAppSelector((state) => state.dj, shallowEqualApp)

  useEffect(() => {
    dispatch(fetchGetDjTopListAction(10))
  }, [])
  return (
    <RankWrapper className="w-426px">
      <DjTitle title={'节目排行榜'}>
        <a href={`#/discover/djradio/rank`}>更多</a>
      </DjTitle>
      <div className="border-1 border-color-[#e2e2e2] border-t-0">
        {djTopList.map((item, index) => {
          const num = item.rank - item.lastRank
          let iClassName = 'u-icn-72'
          if (item.lastRank < 0) {
            iClassName = 'u-icn-75'
          } else if (num > 0) {
            iClassName = 'u-icn-73'
          } else if (num < 0) {
            iClassName = 'u-icn-74'
          }
          return (
            <div
              className={`py-10px flex items-center lending-40px box-content h-40px ${index % 2 == 1 ? 'bg-color-[#f7f7f7]' : 'bg-color-[#fff]'}`}
              key={index}
            >
              <div className="rank">
                <em>{index < 9 ? '0' + (index + 1) : index + 1}</em>
                <span className={`${iClassName}`}>
                  <i className={`sprite_icon2 `}></i>
                  {iClassName != 'u-icn-75' && Math.abs(num)}
                </span>
              </div>
              <a className="relative">
                <img src={getImgUrl(item.program.coverUrl, 40)} />
                <i
                  className="absolute sprite_icon absolute w-22px hidden  h-22px top-1/2 left-1/2 -ml-11px -mt-11px"
                  style={{
                    backgroundPosition: '0 -85px'
                  }}
                ></i>
              </a>
              <div className="w-208px ml-10px">
                <h3>
                  <a className="line-clamp-1">{item.program.name}</a>
                </h3>
                <p>
                  <a className="line-clamp-1">{item.program.description}</a>
                </p>
              </div>
              <div className="u-hot u_table float-right">
                <a
                  className="block u_table"
                  style={{
                    width: '90%'
                  }}
                >
                  <i className="u_table"></i>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </RankWrapper>
  )
}
export default memo(Rank)
