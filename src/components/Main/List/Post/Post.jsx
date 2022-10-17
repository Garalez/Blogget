/* eslint-disable max-len */
import PropTypes from 'prop-types';
import style from './Post.module.css';
import {formatDate} from '../../../../utils/formatDate';
import Rating from './Rating';
import DeleteButton from './DeleteButton';
import PostTitle from './PostTitle';
import PostAuthor from './PostAuthor';
import notPhoto from './img/notphoto.jpg';

export const Post = ({postData}) => {
  const {title, author, ups, created} = postData;
  return (
    <li className={style.post}>
      <img className={style.img} src={notPhoto} alt={title} />

      <div className={style.content}>
        <PostTitle title={title} />
        <PostAuthor author={author} />
      </div>

      <Rating ups={ups} />
      <DeleteButton />
      <time className={style.date} dateTime={created}>{formatDate(created)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
