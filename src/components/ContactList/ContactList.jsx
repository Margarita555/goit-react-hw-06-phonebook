import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = ({ contacts, filter, onDeleteBtn }) => {
  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const visibleContacts = getVisibleContacts();
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ number, name }) => (
        <li key={nanoid()} className={s.item}>
          <span className={s.star}>&#10031;</span>
          {name}:<span className={s.number}>{number}</span>
          <button
            className={s.btn}
            onClick={() => onDeleteBtn(name)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
//   filter: state.contacts.filter,
// });

const mapDispatchToProps = dispatch => ({
  onDeleteBtn: name => dispatch(contactsActions.deleteContact(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
