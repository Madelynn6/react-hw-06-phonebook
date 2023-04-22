import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const savedContacts = localStorage.getItem('contacts')
  ? JSON.parse(localStorage.getItem('contacts'))
  : null;

const initialState = {
  contacts: savedContacts,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  preloadedState: initialState,
});
