import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// export const store = configureStore({
//   reducer: rootReducer,
// })

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore(persistedReducer);
export const persistor = persistStore(store);