import { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { ConfigProvider, Spin, Watermark, theme } from 'antd'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import Player from './views/player'
import hyRequest from './service'
export default function App() {
  const colorPrimary = '#1D4D9F'
  const style: any = {
    '--primary-color': colorPrimary
  }

  useEffect(() => {
    hyRequest
      .get({
        url: `/login/cellphone?phone=17778171251&password=wenshunxin123`
      })
      .then((res) => {
        console.log(res)
        hyRequest.get({ url: '/login/refresh' })
      })
  })

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: colorPrimary },
        algorithm: theme.defaultAlgorithm
      }}
    >
      <div
        className="w-full h-full flex flex-col bg-color-[#f5f5f5]"
        style={style}
      >
        <AppHeader />
        <Suspense fallback={<Spin></Spin>}>
          <Watermark content="网易云音乐" className="flex-1">
            <div className="main flex-1">{useRoutes(routes)}</div>
          </Watermark>
        </Suspense>
        <AppFooter />

        {/* 播放器工具栏 */}
        <Player />
      </div>
    </ConfigProvider>
  )
}
