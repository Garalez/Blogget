import style from './DeleteButton.module.css';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

export const DeleteButton = () => (
  <DeleteIcon className={style.delete} />
);
