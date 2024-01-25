import { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { FooterWrapper, FooterItem } from './style'
import FooterMenuTitles from '@/assets/data/footer_menu_titles.json'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="h-200px pt-30px">
        <div className="flex wrap-v2 justify-between">
          {FooterMenuTitles.map((item, index) => {
            return (
              <a
                key={index}
                className="flex flex-col justify-center items-center"
                href={item.url}
                target="_blank"
              >
                <FooterItem
                  className={`foot_enter_new2 w-45px h-45px`}
                  style={{
                    backgroundPosition: item.position,
                    backgroundSize: '220px 220px'
                  }}
                  hPosition={item.hPosition}
                ></FooterItem>
                <div className="mt-6px">{item.name}</div>
              </a>
            )
          })}
        </div>
      </div>
    </FooterWrapper>
  )
}
export default memo(AppFooter)
