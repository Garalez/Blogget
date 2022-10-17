import React from 'react';
import PropTypes from 'prop-types';
import {usePopularPosts} from '../hooks/usePopularPosts';

export const postsContext = React.createContext({});

export const PostsContextProvider = ({children}) => {
  const [list] = usePopularPosts();

  return (
    <postsContext.Provider value={{list}}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
