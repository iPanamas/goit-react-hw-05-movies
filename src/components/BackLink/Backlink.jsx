import { Link } from 'react-router-dom';

// React-icon
import { RiReplyAllFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

// Styles
import s from './BackLink.module.css';

const BackLink = ({ to, children }) => {
  return (
    <Link className={s.backLink} to={to}>
      <IconContext.Provider value={{ size: '2em', color: 'white' }}>
        <RiReplyAllFill />
      </IconContext.Provider>
      {children}
    </Link>
  );
};
export default BackLink;
