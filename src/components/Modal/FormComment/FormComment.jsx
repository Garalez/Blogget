import {useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';
import {useAuth} from '../../../hooks/useAuth';

export const FormComment = () => {
  const value = useSelector((state) => state.comment.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handlerEvent = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const openCommentWindow = () => {
    setIsCommentsOpen(true);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  const renderForm = () => (
    <form className={style.form} onSubmit={handlerEvent}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      ></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );

  const renderButton = () => (
    <button className={style.btnOpenForm} onClick={() => openCommentWindow()}>
      Написать комментарий
    </button>
  );

  return isCommentsOpen ? renderForm() : renderButton();
};
