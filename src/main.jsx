import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CountContextProvider } from './MyContext.jsx'
import './index.css'
import App from './App.jsx'
import {store} from './redux/store.jsx'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountContextProvider>
    <Provider store={store} >
    <App />
    </Provider>
    </CountContextProvider>
  </StrictMode>,
)
