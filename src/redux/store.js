import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts-reducer';

// console.log(contactsReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
