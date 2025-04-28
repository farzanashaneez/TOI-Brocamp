import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './pages/ErrorBoundary.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import MyContextProvider from './context/myContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
      <MyContextProvider>
    <App />
    </MyContextProvider>
    <></>
    </ErrorBoundary>
    </Provider>
  </StrictMode>,
)
