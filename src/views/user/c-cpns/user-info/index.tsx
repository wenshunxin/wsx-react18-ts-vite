import { shallowEqualApp, useAppSelector } from '@/store'
import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { getImgUrl } from '@/utils/tool'
import { Button, Divider } from 'antd'
interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  const { userInfo } = useAppSelector((state) => state.user, shallowEqualApp)
  const { profile = {}, level } = userInfo || {}
  return (
    <div className="flex">
      <div className="w-180px h-180px border-1 p-3px border-color-[#d5d5d5]">
        <img src={getImgUrl(profile?.avatarUrl, 180)} />
      </div>
      <div className="flex-1 flex flex-col ml-40px">
        <div className="flex items-center">
          <div className="text-[22px] leading-30px">{profile.nickname}</div>
          <span
            className="sprite_icon3 block h-19px pl-29px flex items-center ml-10px text-[#e03a24] text-[14px]"
            style={{
              backgroundPosition: '-135px -190px',
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}
          >
            {level}
            <i
              className="sprite_icon3 h-19px w-9px"
              style={{
                backgroundPosition: '-191px -190px'
              }}
            ></i>
          </span>
          <i
            className="sprite_icon2 w-20px h-20px ml-8px "
            style={{
              backgroundPosition:
                profile.gender === 2 ? '-41px -27px ' : '-41px -57px'
            }}
          ></i>
          <Button type="primary" size="small" className="ml-20px">
            关注
          </Button>
        </div>
        <div className="flex items-center mt-8px mb-10px border-b-1 pb-12px border-color-[#ddd]">
          <i
            className="sprite_icon3 w-68px h-20px mr-6px"
            style={{
              backgroundPosition: '-75px -480px'
            }}
          ></i>
          {profile?.allAuthTypes?.map((item: any, index: number) => {
            return (
              <span
                className="text-[14px] leading-20px text-[#666]"
                key={index}
              >
                {item.desc}
              </span>
            )
          })}
        </div>

        <ul className="flex mb-15px text-[#666">
          <li className="pr-40px pl-20px ">
            <a href={`#/user/event?id=${profile.userId}`}>
              <strong className="block cursor-pointer text-[24px] !text-[#666]">
                {profile.eventCount}
              </strong>
              <span className="text-[#666] mt-4px">动态</span>
            </a>
          </li>
          <Divider type="vertical" style={{ height: '100%' }} />
          <li className="pr-40px pl-20px">
            <a href={`#/user/follows?id=${profile.userId}`}>
              <strong className="block cursor-pointer text-[24px] !text-[#666]">
                {profile.follows}
              </strong>
              <span className="text-[#666] mt-4px">关注</span>
            </a>
          </li>
          <Divider type="vertical" style={{ height: '100%' }} />
          <li className="pr-40px pl-20px">
            <a href={`#/user/fans?id=${profile.userId}`}>
              <strong className="block cursor-pointer text-[24px] !text-[#666]">
                {profile.followeds}
              </strong>
              <span className="text-[#666] mt-4px">粉丝</span>
            </a>
          </li>
        </ul>
        <div className="text-[#666 mb-5px">个人介绍：{profile.signature}</div>
      </div>
    </div>
  )
}
export default memo(UserInfo)
