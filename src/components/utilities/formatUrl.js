export const formatUrl = (oldUrl) => {
  const oldUrlRef = oldUrl.split('-');

  const newUrl = oldUrlRef.join(' ');

  return newUrl;
};

export const urlToPutInSearchBar = (oldUrl) => {
  const oldUrlRef = oldUrl.split(' ');

  const newUrl = oldUrlRef.join('-');

  return newUrl;
};
