import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getInputFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filter = useSelector(getInputFilter);
  const filtered = contacts.filter(el =>
    el.name.toLowerCase().includes(filter)
  );

  const handleDelete = e => {
    const idToDelete = e.target.id;
    dispatch(deleteContact(idToDelete));
  };
  return (
    <ul>
      {filtered.map(el => (
        <li key={el.id} className={css.li}>
          <p className={css.text}>{el.name}</p>
          <p className={css.text}>{el.number}</p>

          <button
            name={el.name}
            id={el.id}
            onClick={handleDelete}
            className={css.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.array,
  handleChange: PropTypes.func,
};

export default ContactList;
