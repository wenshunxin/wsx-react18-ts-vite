import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { PlayWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongsAction } from '@/views/player/store/action'
import { message } from 'antd'
interface IProps {
  children?: ReactNode
}

interface IProps {
  id: number
  fee: number
}

const PlayBtn: FC<IProps> = (props: IProps) => {
  const dispatch = useAppDispatch()
  function handlePlay() {
    if (props.fee === 1) {
      message.info('VIP歌曲，请购买后播放')
      return
    }
    dispatch(fetchCurrentSongsAction(props.id))
  }
  return (
    <PlayWrapper
      className="sprite_table mr-4px"
      onClick={handlePlay}
    ></PlayWrapper>
  )
}
export default memo(PlayBtn)
