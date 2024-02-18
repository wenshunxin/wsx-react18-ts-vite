import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchDjProgramDetailAction } from '../store/action'
import { getImgUrl } from '@/utils'
import { Button, Space } from 'antd'
import dayjs from 'dayjs'
interface IProps {
  children?: ReactNode
}

const Program: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  const { programDetail: d } = useAppSelector(
    (state) => state.djDetail,
    shallowEqualApp
  )
  useEffect(() => {
    dispatch(fetchDjProgramDetailAction(id))
  }, [])
  return (
    <div className="wrap2 wrap-v2">
      <div className="left">
        <div>
          <div className="flex">
            <div className="w-148px h-148px flex items-center justify-center border-1 border-color-[#d3d3d3]">
              <img src={getImgUrl(d.coverUrl, 140)} />
            </div>
            <div className="ml-20px">
              <div className="flex items-center mb-29px">
                <i
                  className="w-73px h-24px sprite_icon3"
                  style={{
                    backgroundPosition: '0 -75px'
                  }}
                ></i>
                <h2 className="text-[20px] leading-24px ml-10px">{d.name}</h2>
              </div>
              <div className="flex items-center">
                <i
                  className="sprite_icon3 w-16px h-17px "
                  style={{
                    backgroundPosition: '-50px -20px'
                  }}
                ></i>
                <a
                  className="text-[16px] text-[#666] ml-10px"
                  href={`#/djradio?id=${d.radio?.id}`}
                >
                  {d.radio?.name}
                </a>
                <Button className="ml-10px">
                  <i
                    className="w-14px h-14px sprite_icon3 inline-block"
                    style={{
                      backgroundPosition: '-50px 0'
                    }}
                  ></i>
                  订阅({d.radio?.subCount})
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 按钮 */}
        <Space className="mt-20px mb-25px">
          <Button type="primary">
            播放 {dayjs(d.duration).format('mm分ss秒')}
          </Button>
          <Button>赞{d.likedCount}</Button>
          <Button>评论{d.commentCount}</Button>
          <Button>分享{d.shareCount}</Button>
          <Button>下载</Button>
        </Space>
        {/* 详情 */}
        <div className="flex items-center">
          <i className="px-6px  border-1 border-color-[#cc0000] text-[#cc0000]">
            {d.radio?.category}
          </i>
          <div className="text-[14px] font-bold ml-10px">
            <span>{d.dj?.nickname}</span>
            <span className="ml-10px">第{d.serialNum}期</span>
          </div>
          <div className="text-[12px] text-[#999] ml-18px">
            <span>
              {dayjs(d.scheduledPublishTime).format('YYYY-MM-DD')}创建
            </span>
            <span className="ml-10px">
              播放：<span className="text-[#cc0000]">{d.listenerCount}</span>次
            </span>
          </div>
        </div>
        <div
          className="mt-20px leading-23px text-[#666]"
          style={{
            whiteSpace: 'pre-wrap'
          }}
        >
          {d.description}
        </div>
      </div>
    </div>
  )
}
export default memo(Program)
