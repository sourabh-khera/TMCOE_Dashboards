import {
  ENABLE_DISABLE_SLIDE_MENU,
  ENABLE_DISABLE_LOADER,
} from '../constants';


export const enableDisableSlideMenu = () => (
  { type: ENABLE_DISABLE_SLIDE_MENU }
);

export const enableDisableLoader = showLoader => (
  { type: ENABLE_DISABLE_LOADER, showLoader }
);
