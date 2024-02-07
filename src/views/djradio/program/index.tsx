import { useAppDispatch } from '@/store'
import { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchDjProgramDetailAction } from '../store/action'
interface IProps {
  children?: ReactNode
}

const Program: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id') as unknown as number

  useEffect(() => {
    dispatch(fetchDjProgramDetailAction(id))
  }, [])
  return (
    <div className="wrap2 wrap-v2">
      <div className="left">12121</div>
    </div>
  )
}
export default memo(Program)
