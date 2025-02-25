import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testimonialReducer from './slices/testimonialSlice';
import servicesReducer from './slices/servicesSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['testimonials', 'services']
};

const rootReducer = combineReducers({
  testimonials: testimonialReducer,
  services: servicesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    })
});

export const persistor = persistStore(store);
export default store;