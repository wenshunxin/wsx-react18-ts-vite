import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { CommentWrapper } from './style'
import { getImgUrl } from '@/utils'
interface IProps {
  user: any
  beReplied: any[]
  content: string
  timeStr: string
  likedCount: number
  children?: ReactNode
}

const CommentItem: FC<IProps> = (props) => {
  const { user, content, beReplied, timeStr, likedCount } = props
  return (
    <CommentWrapper className="flex">
      <div className="head w-50px">
        <a className="w-50px">
          <img src={getImgUrl(user.avatarUrl, 50)} />
        </a>
      </div>
      <div className="cntwrap ml-10px flex-1">
        <div>
          <div className=" cnt items-center">
            <a
              className="text-[#0c73c2]"
              href={`#/user/home?id=${user.userId}`}
            >
              {user.nickname}
            </a>
            {user.vipRights && (
              <img
                src={user.vipRights?.associator?.iconUrl}
                className="h-12px ml-5px inline-block"
              />
            )}
            ：{content}
          </div>
        </div>
        {beReplied?.length > 0 && (
          <div className="que">
            <div className="darr">
              <i className="bd">◆</i>
              <i className="bg">◆</i>
            </div>
            <div>
              <a
                className="text-[#0c73c2]"
                href={`#/user/home?id=${beReplied?.[0]?.user.userId}`}
              >
                {beReplied?.[0]?.user.nickname}
              </a>
              {user.vipRights && (
                <img
                  src={beReplied?.[0]?.user.vipRights?.associator?.iconUrl}
                  className="h-12px ml-5px inline-block"
                />
              )}
              ：{beReplied?.[0]?.content}
            </div>
          </div>
        )}
        <div className="rp flex items-center justify-between">
          <div className="text-[#999]">{timeStr}</div>
          <div className="flex items-center">
            <i className="sprite_icon3 mr-8px"></i>({likedCount})
            <span className="mx-8px text-[#ccc]">|</span>
            <span className="text-[#999]">回复</span>
          </div>
        </div>
      </div>
    </CommentWrapper>
  )
}
export default memo(CommentItem)
