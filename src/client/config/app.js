import { ENV_CONFIG } from './env';

export const isProduction = ENV_CONFIG.env === 'production';
export const isDebug = ENV_CONFIG.env === 'development';
export const isClient = typeof window !== 'undefined';

export const apiEndpoint = isDebug ? 'http://localhost:3000' : 'http://localhost:3000';
// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID = null;

