// PropTypes
import PropTypes from 'prop-types';

// Styles
import s from './Form.module.css';

const Form = ({ handleChange, handleSubmit, searchQuery }) => {
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

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Form;
