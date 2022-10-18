
export const formatPostsData = (arr) => {
  const formattedArray = arr.map(item => ({
    title: item.data.title,
    author: item.data.author,
    ups: item.data.ups,
    selftext: item.data.selftext,
    created: item.data.created,
    id: item.data.id,
  }));

  return formattedArray;
};
