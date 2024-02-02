import { memo } from 'react'
import type { ReactNode, FC } from 'react'
interface IProps {
  title: string
  children?: ReactNode
}

const ArtistHeader: FC<IProps> = (props) => {
  const { title } = props
  return (
    <div className="h-40px border-b-2 border-color-[#c20c0c] text-[24px]">
      {title}
    </div>
  )
}
export default memo(ArtistHeader)
