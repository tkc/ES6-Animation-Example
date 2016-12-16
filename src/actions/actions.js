/**
 * Created by tkc on 12/16/16.
 */

import * as Elements from './../elements/elemnts';
import * as Screen from '../lib/screen';

export const cssFadeIn = 'fadeIn';
export const cssFadeOut = 'fadeOut';
export const cssHiddenName = 'hiddenItem';

export const fixSize = () => {
  const h = Screen.screenHeight();
  Elements.wall.setAttribute("style",
    `height:` + h
  );
};

export const changeWallBackGroundImage = (img) => {
  Elements.wall.setAttribute("style",
    `background:url(` + img + `);background-size: cover;background-position: 50% 50%;`
  );
  Elements.wall.classList.add(cssFadeIn)
};
