import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts-actions';
import s from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
