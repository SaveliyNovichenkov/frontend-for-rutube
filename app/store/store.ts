import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {rootReducer} from "@/store/rootReducer";
import {configureStore} from "@reduxjs/toolkit";



const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>