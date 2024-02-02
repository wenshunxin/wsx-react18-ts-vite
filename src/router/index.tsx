import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Friend = lazy(() => import('@/views/friend'))
const Download = lazy(() => import('@/views/download'))

/** discover 二级路由 */
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const PlayerSong = lazy(() => import('@/views/player/player-detail'))

const RecommendSinger = lazy(
  () => import('@/views/discover/c-views/artist/c-cpns/recommended-singer')
)
import ResidentSinger from '@/views/discover/c-views/artist/c-cpns/resident-singer'
import CatSinger from '@/views/discover/c-views/artist/c-cpns/cat-singer'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend"></Navigate>
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'songs',
        element: <Songs />
      },
      {
        path: 'djradio',
        element: <Djradio />
      },
      {
        path: 'album',
        element: <Album />
      },
      {
        path: 'artist',
        element: <Artist />,
        children: [
          {
            path: '',
            element: <RecommendSinger />
          },
          {
            path: 'signed',
            element: <ResidentSinger />
          },
          {
            path: 'cat',
            element: <CatSinger />
          }
        ]
      },
      {
        path: 'ranking',
        element: <Ranking />
      },
      {
        path: 'player',
        element: <PlayerSong />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
