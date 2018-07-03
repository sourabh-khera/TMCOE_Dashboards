import fetch from 'isomorphic-fetch';
import API from '../../config/endpoints';
import {
  saveOverAllSales,
  saveTopSuppliers,
  saveTopDestinations,
  saveTopHotels,
} from '../hotels';
import {
  enableDisableLoader,
  enableDisableDestinationLoader,
  enableDisableSupplierLoader,
} from '../common';

export const getOverAllSales = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.OVER_ALL_SALES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  dispatch(enableDisableLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const overAllSales = JSON.parse(result[0]);
    dispatch(saveOverAllSales(overAllSales));
    dispatch(enableDisableLoader(false));
  } catch (error) {
    console.log(error);
  }
};

export const getTopDestinations = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.TOP_DESTINATIONS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  dispatch(enableDisableDestinationLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topHotelsDestinations = JSON.parse(result[0]);
    dispatch(saveTopDestinations(topHotelsDestinations));
    dispatch(enableDisableDestinationLoader(false));
  } catch (error) {
    console.log(error);
  }
};

export const getTopSuppliers = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.TOP_SUPPLIERS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  dispatch(enableDisableSupplierLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topSuppliers = JSON.parse(result[0]);
    dispatch(saveTopSuppliers(topSuppliers));
    dispatch(enableDisableSupplierLoader(true));
  } catch (error) {
    console.log(error);
  }
};

export const getTopHotels = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.TOP_HOTELS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topHotels = JSON.parse(result[0]);
    dispatch(saveTopHotels(topHotels));
  } catch (error) {
    console.log(error);
  }
};
