import { createReducer } from "@reduxjs/toolkit";
import { setItems, setFilter, deleteItem } from "./actions";

const defaultState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const contactsReducer = createReducer(defaultState, {
  [setItems](state, action) {
    return {
      ...state,
      contacts: { items: [...action.payload], filter: state.contacts.filter },
    };
  },

  [setFilter](state, action) {
    return {
      ...state,
      contacts: { items: [...state.contacts.items], filter: action.payload },
    };
  },

  [deleteItem](state, action) {
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

export default contactsReducer;
