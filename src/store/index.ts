import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'

import demoSlice from './modules/demo'
import recommendSlice from '../views/discover/c-views/recommend/store/recommend'
import playerSlice from '../views/player/store/player'
import songsSlice from '../views/discover/c-views/songs/store'

// 这个是将状态存储在本地
import storage from 'redux-persist/es/storage'

// 导入createFilter函数
import createFilter from 'redux-persist-transform-filter'
import AlbumSlice from '../views/discover/c-views/album/store/index'
import ArtistSlice from '../views/discover/c-views/artist/store/index'
import DjSlice from '@/views/discover/c-views/djradio/store'
// 创建一个全局折叠过滤器，过滤器接收两个参数，player里面的lyrics
const globalCollapsedFilter = createFilter('player', ['lyrics'])
const djCollapsedFilter = createFilter('dj', ['djCateList'])
// 定义一个persistConfig变量，用于存储持久化配置
const persistConfig = {
  // 持久化存储的key
  key: 'root',
  // 持久化存储的类型
  storage,
  // 持久化存储的过滤器
  whitelist: ['player', 'dj'],
  // 持久化存储的转换器
  transform: [globalCollapsedFilter, djCollapsedFilter]
}

const reducer = combineReducers({
  demo: demoSlice,
  recommend: recommendSlice,
  player: playerSlice,
  songs: songsSlice,
  album: AlbumSlice,
  artist: ArtistSlice,
  dj: DjSlice
})
/**
 * 解决数据状态不持久化
 */
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
export const persister = persistStore(store)
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const shallowEqualApp = shallowEqual
