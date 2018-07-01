import fetch from 'isomorphic-fetch';
import API from '../../config/endpoints';
import {} from '../hotels';
import {} from '../common';

export const getOverAllSales = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.OVER_ALL_SALES;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const overAllSales = JSON.parse(result[0]);
    console.log(overAllSales);
  } catch (error) {
    console.log(error);
  }
};

export const getTopDestinations = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.TOP_DESTINATIONS;
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

export const getTopSuppliers = () => async dispatch => {
  const { url, method } = API.ENDPOINT.HOTELS.TOP_SUPPLIERS;
  const URL = `${API.ENDPOINT.DOMAIN}://${API.ENDPOINT.BASE}:${API.ENDPOINT.PORT}${url}`;
  try {
    const response = await fetch(URL, {
      method,
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    const topSuppliers = JSON.parse(result[0]);
    console.log(topSuppliers);
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
    console.log(topHotels);
  } catch (error) {
    console.log(error);
  }
};
