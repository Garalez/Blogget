
export const formatPostsData = (arr) => {
  const formattedArray = arr.map(item => ({
    title: item.data.title,
    author: item.data.author,
    ups: item.data.ups,
    created: item.data.created,
  }));

  return formattedArray;
};
