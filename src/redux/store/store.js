import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactReducer from "../reducers/name";
import skillReducer from "../reducers/skill";
import educationReducer from "../reducers/education";
import experianceReducer from "../reducers/experiance";
import userReducer from "../reducers/user";
import resumeReducer from "../reducers/resume";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  resume: resumeReducer,
  personal: contactReducer,
  skills: skillReducer,
  experiance: experianceReducer,
  education: educationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
