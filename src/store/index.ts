import themeConfigReducer from "./themeConfigSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
  PERSIST,
  PAUSE,
  PURGE,
  FLUSH,
  persistStore,
  REHYDRATE,
  REGISTER,
} from "redux-persist";

const store = configureStore({
  reducer: {
    themeConfig: themeConfigReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
