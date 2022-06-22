import s from './Pages.module.css';

const SearchMovie = () => {
  return (
    <>
      <form className={s.searchForm}>
        <label htmlFor="">
          <input type="text" />
        </label>
        <button className={s.searchButton} type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchMovie;
