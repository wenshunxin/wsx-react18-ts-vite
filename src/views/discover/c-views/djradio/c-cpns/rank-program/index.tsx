import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import DjTitle from '../dj-title'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { fetchGetDjTopListAction } from '../../store/action'
import { RankWrapper } from '../default-page/c-cpns/rank/style'
import { getImgUrl } from '@/utils'
import dayjs from 'dayjs'
import { Tooltip } from 'antd'
interface IProps {
  children?: ReactNode
}

const RankProgram: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { djTopList = [] } = useAppSelector(
    (state) => state.dj,
    shallowEqualApp
  )

  useEffect(() => {
    dispatch(fetchGetDjTopListAction(100))
  }, [])

  const title = (
    <div>
      节目排行榜{' '}
      <span className="ml-10px text-[#999] text-[12px]">
        最近更新：{dayjs(new Date()).format('MM月DD日')}
      </span>
    </div>
  )

  return (
    <div className="wrap-v2 p-40px bg-color-[#fff] min-h-700px border-1 border-color-[#d3d3d3] border-b-0">
      <RankWrapper>
        <DjTitle title={title}>
          <Tooltip
            placement="bottom"
            title="选取云音乐中7天内发布的热度最高的节目，每天更新。热度由节目播放、赞、分享数量总和计算。"
          >
            <i
              className="icon2"
              style={{
                width: '18px',
                height: '18px',
                backgroundPosition: ' 0 -50px'
              }}
            ></i>
          </Tooltip>
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
                <div className="w-304px ml-10px">
                  <h3>
                    <a className="line-clamp-1">{item.program.name}</a>
                  </h3>
                </div>
                <div className="ml-10px w-176px text-[#999]">
                  <p>
                    <a className="line-clamp-1">{item.program?.description}</a>
                  </p>
                </div>
                <div className="ml-10px w-140px">
                  <a className="ml-10px h-16px border-1 border-color-[#999] text-[#999] hover:border-color-[#666] hover:text-[#666] !no-underline leading-16px text-[12px] px-6px">
                    {item.program?.radio?.category}
                  </a>
                </div>
                <div className="u-hot u_table ">
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
    </div>
  )
}
export default memo(RankProgram)
