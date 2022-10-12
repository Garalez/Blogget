import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';


export const Rating = ({ups}) => (
  <Text As='div' className={style.rating}>
    <Text As='button' className={style.up} aria-label='Повысить рейтинг' />
    <Text
      As='p'
      className={style.ups}
      size={12}
      tsize={16}
      color='grey99'
      fontWeight='bold'
    >
      {ups}
    </Text>
    <Text As='button' className={style.down} aria-label='Понизить рейтинг' />
  </Text>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
