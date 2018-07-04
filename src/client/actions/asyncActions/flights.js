import fetch from 'isomorphic-fetch';
import API from '../../config/endpoints';
import {
  saveTopRoutes,
  saveTopOrigins,
  saveTotalSales,
  saveTopAirlines,
  saveTopDestinations,
} from '../flights';
import {
  enableDisableLoader,
  enableDisableOriginLoader,
  enableDisableAirlineLoader,
  enableDisableDestinationLoader,
} from '../common';

export const getTotalSales = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOTAL_SALES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}${url}`;
  dispatch(enableDisableLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const totalSales = JSON.parse(result[0]);
    dispatch(enableDisableLoader(false));
    dispatch(saveTotalSales(totalSales));
  } catch (error) {
    console.log(error);
  }
};

export const getTopDestinations = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_DESTINATIONS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}${url}`;
  dispatch(enableDisableDestinationLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topFlightsDestinations = JSON.parse(result[0]);
    dispatch(saveTopDestinations(topFlightsDestinations));
    dispatch(enableDisableDestinationLoader(false));
  } catch (error) {
    console.log(error);
  }
};

export const getTopAirlines = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_AIRLINES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}${url}`;
  dispatch(enableDisableAirlineLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topAirlines = JSON.parse(result[0]);
    dispatch(saveTopAirlines(topAirlines));
    dispatch(enableDisableAirlineLoader(false));
  } catch (error) {
    console.log(error);
  }
};

export const getTopOrigins = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_ORIGINS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}${url}`;
  dispatch(enableDisableOriginLoader(true));
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topOrigins = JSON.parse(result[0]);
    dispatch(saveTopOrigins(topOrigins));
    dispatch(enableDisableOriginLoader(false));
  } catch (error) {
    console.log(error);
  }
};

export const getTopRoutes = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_ROUTES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topRoutes = JSON.parse(result[0]);
    dispatch(saveTopRoutes(topRoutes));
  } catch (error) {
    console.log(error);
  }
};
