import * as Elements from '../elements/elemnts';
import * as Actions from '../actions/actions';
import $ from "jquery";

export let endScript = false;
export let sec = 0;

export const remove = () => {
  Elements.wallImg1.classList.add('wall--img-effect--end');
  Elements.wall.classList.add(Actions.cssFadeOut);
  setTimeout(function () {
    Elements.wallWrap.setAttribute("style",
      `display:none`
    );
  }, 1200);
};

export const endEvent = () => {

  Elements.wallWrap.addEventListener('click', () => {
    endScript = true;
    remove();
  });

  $(window).scrollTop(()=> {
    document.onscroll = () => {
      const y = window.pageYOffset;
      if (y > 100) {
        endScript = true;
        remove();
      }
    };
  });
};

export const showTexts = () => {
  const timer = setInterval(() => {
    script();
    if (sec > 20000) {
      clearInterval(timer);
    }
  }, 100);
};

const script = () => {

  if (endScript) {
    return true;
  }

  if (sec == 2000) {
    Elements.overWall.classList.add(Actions.cssFadeOut);
  }

  if (sec == 5000) {
    Elements.wallTextItem1.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem1.classList.add(Actions.cssFadeIn);
  }

  if (sec == 6000) {
    Elements.wallTextItem2.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem2.classList.add(Actions.cssFadeIn);
  }

  if (sec == 7000) {
    Elements.wallTextItem3.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem3.classList.add(Actions.cssFadeIn);
  }

  if (sec == 8000) {
    Elements.wallTextItem4.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem4.classList.add(Actions.cssFadeIn);
  }

  if (sec == 9000) {
    Elements.wallTextItem5.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem5.classList.add(Actions.cssFadeIn);
  }

  if (sec == 10000) {
    Elements.wallTextItem6.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem6.classList.add(Actions.cssFadeIn);
  }

  if (sec == 11000) {
    Elements.wallTextItem7.classList.remove(Actions.cssHiddenName);
    Elements.wallTextItem7.classList.add(Actions.cssFadeIn);
  }

  if (sec == 11500) {
    Elements.wallTextLineTop.setAttribute("style",
      `width:` + 520 + ';' +
      `height:` + 1
    );
    Elements.wallTextLineButton.setAttribute("style",
      `width:` + 520 + ';' +
      `height:` + 1
    );
  }

  if (sec == 18000) {
    Actions.changeWallBackGroundImage(Elements.wallImage2);
  }

  sec += 100;

};
