import {
  ENABLE_DISABLE_SLIDE_MENU,
  ENABLE_DISABLE_LOADER,
  ENABLE_DISABLE_ORIGIN_LOADER,
  ENABLE_DISABLE_AIRLINE_LOADER,
  ENABLE_DISABLE_SUPPLIER_LOADER,
  ENABLE_DISABLE_DESTINATION_LOADER,
  HIGHLIGHT_HOTEL,
  HIGHLIGHT_FLIGHT,
} from '../constants';


export const enableDisableSlideMenu = () => (
  { type: ENABLE_DISABLE_SLIDE_MENU }
);

export const enableDisableLoader = showLoader => (
  { type: ENABLE_DISABLE_LOADER, showLoader }
);

export const enableDisableOriginLoader = showOriginLoader => (
  { type: ENABLE_DISABLE_ORIGIN_LOADER, showOriginLoader }
);

export const enableDisableSupplierLoader = showSupplierLoader => (
  { type: ENABLE_DISABLE_SUPPLIER_LOADER, showSupplierLoader }
);

export const enableDisableAirlineLoader = showAirlineLoader => (
  { type: ENABLE_DISABLE_AIRLINE_LOADER, showAirlineLoader }
);

export const enableDisableDestinationLoader = showDestLoader => (
  { type: ENABLE_DISABLE_DESTINATION_LOADER, showDestLoader }
);

export const highlightHotel = highlight => (
  { type: HIGHLIGHT_HOTEL, highlight }
);

export const highlightFlight = highlight => (
  { type: HIGHLIGHT_FLIGHT, highlight }
);
