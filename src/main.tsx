import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Loading from './components/Loading/index.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Loading />
      <App />
    </Provider>
  </StrictMode>,
)
