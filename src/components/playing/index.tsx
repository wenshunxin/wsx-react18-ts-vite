import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { PlayingWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Playing: FC<IProps> = () => {
  return (
    <PlayingWrapper>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
      <div className="column"></div>
    </PlayingWrapper>
  )
}
export default memo(Playing)
