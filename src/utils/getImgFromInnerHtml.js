const getImgFromInnerHtml = (innerHtml) => {
  if (!innerHtml) return '';
  return innerHtml.slice(3, innerHtml.length - 4);
};

export default getImgFromInnerHtml;
