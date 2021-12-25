import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { combineReducers } from 'redux';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [payload, ...state],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.name !== payload),
  //   console.log(payload);
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
// const items = (state = [], { type, payload }) => {
//   //   console.log(payload);
//   switch (type) {
//     case 'contacts/add':
//       return [payload, ...state];
//     case 'contacts/delete':
//       console.log(state.filter(contact => contact.name !== payload));
//       return state.filter(contact => contact.name !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'contacts/changeFilter':
//       return payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
