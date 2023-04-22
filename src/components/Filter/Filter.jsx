import { useDispatch } from 'react-redux';
// import { getInputFilter } from 'redux/selectors';
import { setInputFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    const inputValue = e.target.value;
    dispatch(setInputFilter(inputValue));
  };

  return (
    <div>
      <p>Find contacts by name:</p>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilter}
        className={css.input}
        placeholder="Name"
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func,
};

export default Filter;
