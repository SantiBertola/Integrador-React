import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/CategoriesSlice";
import productsReducer from "./products/ProductsSlice";
import cartReducer from './cart/cartSlice'
import persistReducer from "redux-persist/es/persistReducer";
import userReducer from './user/userSlice'
import ordersReducer from './orders/ordersSlice'
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore"


const reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user']
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
  });
  
  export const persistor = persistStore(store);




