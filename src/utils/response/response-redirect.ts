import errorLogger from '../logger';

export const ok = (params: { link: string }) => {
  return {
    link: params.link,
  };
};

export const serverError = (error: any) => {
  errorLogger(error);
  return {
    link: 'https://pagtel.com.br/error-internal',
  };
};
