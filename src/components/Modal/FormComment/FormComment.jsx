import {useContext, useRef, useState} from 'react';
import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';

export const FormComment = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const {auth} = useContext(authContext);
  const inputRef = useRef(null);

  const handlerEvent = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  const openCommentWindow = () => {
    setIsCommentsOpen(true);
    setTimeout(() => inputRef.current.focus());
  };

  return (
    isCommentsOpen ? (
    <form className={style.form} onSubmit={handlerEvent}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea className={style.textarea} ref={inputRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>) :

    <button
      className={style.btnOpenForm}
      onClick={() => openCommentWindow()}
    >
    Написать комментарий
    </button>
  );
};

