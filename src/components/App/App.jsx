// import useLocalStorage from '../../hooks/useLocalStarage';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import s from './App.module.css';
// import { connect } from 'react-redux';
// import * as contactsActions from '../../redux/contacts-actions';

function App() {
  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
export default App;
// const mapStateToProps = state => ({
//   contacts: state.items,
//   filter: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
// handleAddContact: (name, number) =>
//   dispatch(contactsActions.addContact(name, number)),
// handleDeleteContact: name => dispatch(contactsActions.deleteContact(name)),
// onFilterChange: e => dispatch(contactsActions.changeFilter(e)),
// });

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import useLocalStorage from '../../hooks/useLocalStarage';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/Filter';
// import s from './App.module.css';

// function App() {
//   const [contacts, setContacts] = useLocalStorage('contacts', []);
//   const [filter, setFilter] = useState('');

//   const handleAddContact = (name, number) => {
//     const isDuplicateContact = contacts.find(contact => contact.name === name);
//     if (isDuplicateContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     setContacts([newContact, ...contacts]);
//   };

//   const onFilterChange = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   const handleDeleteContact = name => {
//     setContacts(contacts.filter(contact => contact.name !== name));
//   };

//   const visibleContacts = getVisibleContacts();
//   return (
//     <div className={s.app}>
//       <h1>Phonebook</h1>
//       <ContactForm contacts={contacts} onSubmit={handleAddContact} />
//       <h2>Contacts</h2>
//       <Filter filter={filter} onFilterChange={onFilterChange} />
//       <ContactList
//         contacts={visibleContacts}
//         onDeleteBtn={handleDeleteContact}
//       />
//     </div>
//   );
// }

// export default App;
