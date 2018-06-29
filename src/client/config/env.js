
const commonConfig = {
    appVersion: {
        name: 'v1'
    },
};

export const config = {
    development: {
        env: process.env.NODE_ENV || 'development',
        baseURL: 'http://localhost:3000',
        versionInfo: '/api/v1'
    },
    staging: {
        env: process.env.NODE_ENV || 'staging',
        baseURL: 'http://ecomm-ordering-service-staging.squaretwo.co',
        versionInfo: '/api/v1'
    },
    production: {
        env: process.env.NODE_ENV || 'production',
        baseURL: 'http://localhost:3000',
        versionInfo: '/api/v1'
    },
};

export const ENV_CONFIG = { ...commonConfig, ...config[process.env.NODE_ENV || 'development'] };
