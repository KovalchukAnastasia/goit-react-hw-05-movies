import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Please, enter movie title!');
      return;
    }
    onSubmit(value);
    reset();
  };

  const reset = () => {
    setValue('');
  };

  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <input
        className={style.searchFormInput}
        value={value}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={handleChange}
      />
      <button className={style.searchFormButton} type="submit">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
