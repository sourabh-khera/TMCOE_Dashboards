import fetch from 'isomorphic-fetch';
import API from '../../config/endpoints';
import {} from '../hotels';
import {} from '../common';

export const getTotalSales = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOTAL_SALES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const totalSales = JSON.parse(result[0]);
    console.log(totalSales);
  } catch (error) {
    console.log(error);
  }
};

export const getTopDestinations = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_DESTINATIONS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topDestinations = JSON.parse(result[0]);
    console.log(topDestinations);
  } catch (error) {
    console.log(error);
  }
};

export const getTopAirlines = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_AIRLINES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topAirlines = JSON.parse(result[0]);
    console.log(topAirlines);
  } catch (error) {
    console.log(error);
  }
};

export const getTopOrigins = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_ORIGINS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topOrigins = JSON.parse(result[0]);
    console.log(topOrigins);
  } catch (error) {
    console.log(error);
  }
};

export const getTopRoutes = () => async dispatch => {
  const { url, method } = API.ENDPOINT.FLIGHTS.TOP_ROUTES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topRoutes = JSON.parse(result[0]);
    console.log(topRoutes);
  } catch (error) {
    console.log(error);
  }
};
