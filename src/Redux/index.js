import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './Reducers'
import thunk from 'redux-thunk'

export const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage
  }

  const persistReducers = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistReducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
  )
  const persistStor = persistStore(store)

  return {
    store,
    persistStor
  }
}
