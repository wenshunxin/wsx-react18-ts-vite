import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { CommentWrapper } from './style'
import CommentItem from './c-cpns/comment-item'
interface IProps {
  total?: number
  hotComments?: any[]
  comments?: any[]
  children?: ReactNode
}

const HotCommend: FC<IProps> = (props) => {
  const { hotComments = [], comments = [], total = 0 } = props
  return (
    <CommentWrapper>
      {hotComments.length > 0 && (
        <div className="comment">
          <h3>精彩评论</h3>
          {/* 精彩评论 */}
          {hotComments.map((item, index) => {
            return <CommentItem key={index} {...item} />
          })}
        </div>
      )}

      {comments.length > 0 && (
        <div className="comment mt-30px">
          <h3>最新评论({total})</h3>
          {/* 最新评论(3024) */}
          {comments.map((item, index) => {
            return <CommentItem key={index} {...item} />
          })}
        </div>
      )}
    </CommentWrapper>
  )
}
export default memo(HotCommend)
