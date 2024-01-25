import ReactDOM from 'react-dom/client'
import App from '@/App'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persister, store } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'
import 'normalize.css'
import '@/assets/css/index.less'

import 'virtual:windi.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
)
