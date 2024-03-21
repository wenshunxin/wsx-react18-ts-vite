import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { MvWrapper } from './style'
import { fetchMvCommentAction, fetchMvDetailAction } from './store/actions'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { useSearchParams } from 'react-router-dom'
import { Button, Space } from 'antd'
import HotComment from '@/components/hot-comment'
interface IProps {
  children?: ReactNode
}

const Mv: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const {
    mvData: m,
    hotComments,
    total
  } = useAppSelector((state) => state.mv, shallowEqualApp)
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number
  useEffect(() => {
    dispatch(fetchMvDetailAction(id)) // 1是随便给的，实际应该是路由传参
    dispatch(fetchMvCommentAction(id))
  }, [])
  return (
    <MvWrapper className="wrap-v2 min-h-700px flex">
      <div className="left">
        <div className="flex items-center">
          <i className="sprite_icon3 w-29px h-18px mr-8px"></i>
          <span className="text-[24px]">{m?.name}</span>
          <a
            className="primary ml-8px"
            href={`#/artist?id=${m?.artists?.[0]?.id}`}
          >
            {m?.artistName}
          </a>
        </div>
        <div className="w-640px h-360px ">
          <video
            className="w-full h-full"
            poster={m?.cover}
            src={m?.videoUrl}
            controls
          ></video>
        </div>
        <div className="mt-10px">
          <Space>
            <Button>点赞：{m?.commentCount}</Button>
            <Button>收藏：{m?.subCount}</Button>
            <Button>分享：{m?.shareCount}</Button>
          </Space>
        </div>

        <HotComment hotComments={hotComments} total={total} />
      </div>
      <div className="right"></div>
    </MvWrapper>
  )
}
export default memo(Mv)
