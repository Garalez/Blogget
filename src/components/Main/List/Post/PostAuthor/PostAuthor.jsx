import style from './PostAuthor.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const PostAuthor = ({author}) => (
  <Text
    As='a'
    size={12}
    tsize={14}
    color='orange'
    className={style.linkAuthor}
    href='#author'
  >
    {author}
  </Text>
);

PostAuthor.propTypes = {
  author: PropTypes.string,
};
