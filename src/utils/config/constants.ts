import 'dotenv/config';

export const SERVER = {
  BASE_URI: process.env.BASE_URI || '',
  PORT: process.env.PORT || 3333,
};

export const LINKS = {
  URL: process.env.URL || '',
  ACCESS: process.env.URL_ACCESS || '',
  NOT_FOUND: process.env.URL_NOT_FOUND || '',
};

export const DATABASE = {
  DB_NAME: process.env.DATABASE_NAME || '',
  DB_DIALECT: process.env.DATABASE_DIALECT || 'mssql',
  DB_HOST: process.env.DATABASE_HOST || '',
  DB_USERNAME: process.env.DATABASE_USER || '',
  DB_PASSWORD: process.env.DATABASE_PASSWORD || '',
  DB_INSTANCE_NAME: process.env.DATABASE_INSTANCE_NAME || '',
  DB_PORT: process.env.DATABASE_PORT || '',
};

export const MONGO = {
  USER: process.env.MONGO_USER || '',
  PASSWORD: process.env.MONGO_PASSWORD || '',
  HOST: process.env.MONGO_HOST || '',
  PORT: process.env.MONGO_PORT || '',
  NAME: process.env.MONGO_NAME || '',
  AUTH_SOURCE: process.env.MONGO_NAME || '',
};
