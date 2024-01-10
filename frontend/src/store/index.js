import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, persistReducer, persistStore } from "redux-persist";

//서로 다른 리듀싱 함수를 값으로 가지는 객체를 받아 createStore에 넘길 수 있는 하나의 리듀싱 함수로 합침
export const rootReducer = combineReducers({
    user: userReducer
});
//리덕스스토어의 데이터 저장 위치를 결정함
const persistConfig = {
    key: 'root', //key 이름
    storage, //로컬 스토리지에 저장함
    //whitelist: [] => 해당 리듀서만 로컬 스토리지에 저장함
    //blacklist: [] => 해당 리듀서는 로컬 스토리지에 저장 불가함
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER]
        }
    })
})

export const persistor = persistStore(store);