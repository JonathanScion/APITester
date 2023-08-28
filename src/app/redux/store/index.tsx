import { createSlice ,configureStore} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const initialState = {
  url: "",
};

console.log('creating slice')
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    apiReducer(state, action) {
      console.log(`apiReducer: saving`,action.payload)
      state.url = action.payload.url;
    },
  },
});

/*
const apiReducer = (state = initialState, action) => {
  if (action.type == "url") {
    return {
      url: action.url,
    };
  }

  return {...state}
};*/

console.log('creating slice')

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer  = persistReducer(persistConfig, apiSlice.reducer);

const store = configureStore ({
  reducer: {api: persistedReducer/*apiSlice.reducer*/},
  middleware: [thunk]
  });

export const apiActions = apiSlice.actions;
export default store;
export const persistor = persistStore(store)