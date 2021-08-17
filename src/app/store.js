import { configureStore, createReducer } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const defaultState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};

const contactsReducer = createReducer(defaultState, {
  SET_ITEMS(state, action) {
    return {
      ...state,
      contacts: { items: [...action.payload], filter: state.contacts.filter },
    };
  },

  SET_FILTER(state, action) {
    return {
      ...state,
      contacts: { items: [...state.contacts.items], filter: action.payload },
    };
  },

  DELETE_ITEM(state, action) {
    return {
      ...state,
      contacts: {
        items: state.contacts.items.filter(
          (item) => item.id !== action.payload
        ),
        filter: state.contacts.filter,
      },
    };
  },
});

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
