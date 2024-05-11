// Import necessary functions and libraries from Redux and related packages
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux" 
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import cart from "./cartSlice" 

// Combine your reducers using combineReducers
const reducers = combineReducers({ cart })

// Configuration object for redux-persist
const config = {
    key: "root", // Key for the storage
    storage, // Storage engine (imported from redux-persist)
}

// Create a persisted reducer by wrapping your combined reducers with persistReducer
const reducer = persistReducer(config, reducers)

// Configure the Redux store
const store = configureStore({
    reducer: reducer, // Set the reducer to the persisted reducer
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
    middleware: [thunk], // Pass thunk middleware as an array
})


export default store
