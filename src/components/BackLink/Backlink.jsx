import { Link } from 'react-router-dom';

// PropTypes
import PropTypes from 'prop-types';

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

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default BackLink;
