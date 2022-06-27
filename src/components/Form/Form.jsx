import { useState } from 'react';

// Toast notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import s from './Form.module.css';

const Form = ({ setSearchParams }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    event.preventDefault();

    if (searchQuery.toLowerCase().trim() === '') {
      return toast.info('Please enter movie name 🤦‍♂️');
    }

    setSearchParams({ query: form.elements.query.value });
    setSearchQuery('');
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <label className={s.searchLabel}>
        <input
          name="query"
          value={searchQuery}
          className={s.searchInput}
          type="text"
          onChange={handleChange}
        />
      </label>
      <button className={s.searchButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
