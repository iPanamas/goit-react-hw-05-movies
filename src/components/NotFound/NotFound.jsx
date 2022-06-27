// Styles
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.notFound}>
      <h1 className={s.notFoundTitle}>Page not found 😒</h1>
      <img
        className={s.notFoundImage}
        src="https://s00.yaplakal.com/pics/pics_original/1/2/5/12617521.png"
        alt="images"
      />
    </div>
  );
};
export default NotFound;
