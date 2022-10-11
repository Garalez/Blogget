import style from './PostTitle.module.css';
import PropTypes from 'prop-types';

export const PostTitle = ({title}) => (
  <h2 className={style.title}>
    <a className={style.linkPost} href='#post'>
      {title}
    </a>
  </h2>
);

PostTitle.propTypes = {
  title: PropTypes.string,
};
