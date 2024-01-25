import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import AppPlayerBar from './app-player-bar'
import AppPlayPanel from './app-player-panel'
interface IProps {
  children?: ReactNode
}
const Player: FC<IProps> = () => {
  return (
    <div className="relative">
      {/* 面板 */}
      <AppPlayPanel />
      {/* 播放器 */}
      <AppPlayerBar />
    </div>
  )
}
export default memo(Player)
