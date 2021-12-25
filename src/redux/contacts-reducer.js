import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  //   console.log(payload);
  switch (type) {
    case 'contacts/add':
      return [payload, ...state];
    case 'contacts/delete':
      console.log(state.filter(contact => contact.name !== payload));
      return state.filter(contact => contact.name !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'contacts/changeFilter':
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
