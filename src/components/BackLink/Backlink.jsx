import { Link } from 'react-router-dom';
import s from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link className={s.backLink} to={to}>
      {children}
    </Link>
  );
};
export default BackLink;
