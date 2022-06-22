import s from './Pages.module.css';

const SearchMovie = () => {
  return (
    <>
      <form className={s.searchForm}>
        <label className={s.searchLabel}>
          <input className={s.searchInput} type="text" />
        </label>
        <button className={s.searchButton} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchMovie;
