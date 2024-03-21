import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Friend = lazy(() => import('@/views/friend'))
const Download = lazy(() => import('@/views/download'))

/** discover 二级路由 */
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const DiscoverArtist = lazy(() => import('@/views/discover/c-views/artist'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const PlayerSong = lazy(() => import('@/views/player/player-detail'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))

const RecommendSinger = lazy(
  () => import('@/views/discover/c-views/artist/c-cpns/recommended-singer')
)
import ResidentSinger from '@/views/discover/c-views/artist/c-cpns/resident-singer'
import CatSinger from '@/views/discover/c-views/artist/c-cpns/cat-singer'
import DefaultPage from '@/views/discover/c-views/djradio/c-cpns/default-page'
import CategoryPage from '@/views/discover/c-views/djradio/c-cpns/category-page'
import RecommendedProgram from '@/views/discover/c-views/djradio/c-cpns/recommended-program'
import RankProgram from '@/views/discover/c-views/djradio/c-cpns/rank-program'
import Playlist from '@/views/playlist'
import DefaultRouter from '@/components/DefaultRouter'
import Artist from '@/views/artist'
import Program from '@/views/djradio/program'
import User from '@/views/user'
import Mv from '@/views/mv'

const ArtistHit = lazy(() => import('@/views/artist/c-views/hit'))
const ArtistAlbums = lazy(() => import('@/views/artist/c-views/albums'))
const ArtistMv = lazy(() => import('@/views/artist/c-views/mv'))
const ArtistDesc = lazy(() => import('@/views/artist/c-views/desc'))
const AlbumDetail = lazy(() => import('@/views/album/index'))
const DjRadio = lazy(() => import('@/views/djradio'))

const UserHome = lazy(() => import('@/views/user/c-cpns/home/index'))
const UserEvent = lazy(() => import('@/views/user/c-cpns/event'))
const UserFollows = lazy(() => import('@/views/user/c-cpns/follows'))
const UserFans = lazy(() => import('@/views/user/c-cpns/fans'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: '/',
    element: <Discover />,
    children: [
      {
        path: 'discover',
        element: <DefaultRouter />,
        children: [
          {
            path: '',
            element: <Navigate to={'/discover/recommend'}></Navigate>
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
            element: <Djradio />,
            children: [
              { path: '', element: <DefaultPage /> },
              { path: 'category', element: <CategoryPage /> }
            ]
          },
          { path: 'djRadio/recommend', element: <RecommendedProgram /> },
          { path: 'djRadio/rank', element: <RankProgram /> },
          {
            path: 'album',
            element: <Album />
          },
          {
            path: 'artist',
            element: <DiscoverArtist />,
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
        path: 'playlist',
        element: <Playlist />
      },
      {
        path: 'artist',
        element: <Artist />,
        children: [
          { path: '', element: <ArtistHit /> },
          { path: 'album', element: <ArtistAlbums /> },
          { path: 'mv', element: <ArtistMv /> },
          { path: 'desc', element: <ArtistDesc /> }
        ]
      },
      {
        path: 'album',
        element: <AlbumDetail />
      },
      {
        path: 'program',
        element: <Program />
      },
      {
        path: 'djradio',
        element: <DjRadio />
      }
    ]
  },
  {
    path: 'mv',
    element: <Mv />
  },
  {
    path: 'user',
    element: <User />,
    children: [
      {
        path: '',
        element: <Navigate to={'/user/home'}></Navigate>
      },
      {
        path: 'home',
        element: <UserHome />
      },
      {
        path: 'event',
        element: <UserEvent />
      },
      { path: 'follows', element: <UserFollows /> },
      { path: 'fans', element: <UserFans /> }
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
