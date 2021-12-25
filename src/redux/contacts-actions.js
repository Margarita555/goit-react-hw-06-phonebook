import { nanoid } from 'nanoid';

export const addContact = (name, number) => ({
  type: 'contacts/add',
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const deleteContact = name => ({
  type: 'contacts/delete',
  payload: name,
});

export const changeFilter = value => ({
  type: 'contacts/changeFilter',
  payload: value,
});

// export default { addContact, deleteContact, changeFilter };
