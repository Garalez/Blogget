import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect, useRef} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import {Text} from '../../UI/Text';
import {Preloader} from '../../UI/Preloader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const [commentsData, post, status] = useCommentsData(id);
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.key === 'Escape') {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && <Preloader size={100} />}
        {status === 'error' && (
          <Text As='h2' className={style.title}>
            Ошибка
          </Text>
        )}
        {status === 'loaded' && (
          <>
            <Text As='h2' className={style.title}>
              {post.title}
            </Text>

            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {post.selftext}
              </Markdown>
            </div>

            <Text As='p' className={style.author}>
              {post.author}
            </Text>

            <FormComment />

            <Comments comments={commentsData} />

            <button
              className={style.close}
              onClick={() => {
                navigate(`/category/${page}`);
              }}
            >
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
