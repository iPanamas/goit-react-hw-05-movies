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
export default Form;
