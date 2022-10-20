import PropTypes from 'prop-types';
import RingLoader from 'react-spinners/RingLoader';
import style from './Preloader.module.css';

export const Preloader = ({size}) => (
  <div className={style.loader}>
    <div className={style.wrapper}>
      <RingLoader color='#cc6633' style={{display: 'block'}} size={size} />
    </div>
  </div>
);

Preloader.propTypes = {
  size: PropTypes.number,
};
