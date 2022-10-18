/* eslint-disable max-len */
import PropTypes from 'prop-types';
import style from './Post.module.css';
import Rating from './Rating';
import DeleteButton from './DeleteButton';
import Content from './Content';
import notPhoto from './img/notphoto.jpg';
import Date from './Date';

export const Post = ({postData}) => {
  const {
    title,
    author,
    ups,
    created: date,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notPhoto} alt={title} />
      <Content title={title} author={author} id={id} />
      <Rating ups={ups} />
      <DeleteButton />
      <Date date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
