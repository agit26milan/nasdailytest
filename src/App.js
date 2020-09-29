import React from 'react'
import './App.css'
import Router from './Router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from './Redux'
function App () {
  const { store, persistStor } = configureStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <Router />
      </PersistGate>
    </Provider>

  )
}

export default App
