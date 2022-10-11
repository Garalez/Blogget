import style from './PostAuthor.module.css';
import PropTypes from 'prop-types';

export const PostAuthor = ({author}) => (
  <a className={style.linkAuthor} href='#author'>{author}</a>
);

PostAuthor.propTypes = {
  author: PropTypes.string,
};
