import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import Date from '../../Main/List/Post/Date';

export const Comments = ({comments}) => (
  comments.length > 0 ? (
    <ul className={style.list}>
      {comments.map(comment => comment.body && (
        <li className={style.item} key={comment.id}>
          <Text
            As='h3'
            className={style.author}
            size={18}
            tsize={22}
          >
            {comment.author}
          </Text>
          <Text
            As='p'
            className={style.comment}
            size={14}
            tsize={18}
          >
            {comment.body}
          </Text>
          <Date date={comment.created} />
        </li>
      ))}
    </ul>) :
    <Text
      As='h3'
      className={style.author}
      size={18}
      tsize={22}
    >
      Нет комментариев
    </Text>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
