import {useEffect, useState} from 'react';

const SvgIcon = ({path}) => {
  const [element, setElement] = useState(null);

  useEffect(() => {
    import('../../components/Header/Auth/img/login.svg').then((res) => {
      const Icon = res?.ReactComponent;
      setElement(<Icon path={path} />);
    });
  }, [path]);

  return element;
};

export default SvgIcon;
