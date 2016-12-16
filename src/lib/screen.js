
export const getX = (event)=> {
  const dElm = document.documentElement, dBody = document.body;
  const x = event.offsetX;
  const sx = dElm.scrollLeft || dBody.scrollLeft;
  const pointX = x + sx;
  return pointX;
};

export const getY = (event)=> {
  const dElm = document.documentElement, dBody = document.body;
  const y = event.offsetY;
  const sY = dElm.scrollTop || dBody.scrollTop;
  const pointY = y + sY;
  return pointY;
};

export const getTotalW = ()=> {
  return Math.max.apply(null, [ document.body.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.documentElement.clientWidth ]);
};

export const getTotalH = ()=> {
  return Math.max.apply(null, [ document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight ]);
};

export const screenWidth = ()=> {
  return document.documentElement.clientWidth;
};

export const screenHeight = ()=> {
  return document.documentElement.clientHeight;
};

export const getScrollY = () => {
  const dElm = document.documentElement, dBody = document.body;
  const sY = dElm.scrollTop || dBody.scrollTop;
  const wh = window.innerHeight;
  return sY + wh;
};

export const getCenterY = ()=> {
  const dElm = document.documentElement, dBody = document.body;
  const sY = dElm.scrollTop || dBody.scrollTop;
  const wc = Math.round(window.innerHeight / 2);
  const windowCenterH = sY + wc;
  return windowCenterH;
};

