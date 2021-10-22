import { Router } from 'express';
import { adaptRedirect, adaptRoute } from '../adapters';
import { makeCreateShortUrl, makeRedirectUrl } from '../factories/controllers';

export default (routes: Router) => {
  routes.get('/', async (_, res) => {
    return res.json({
      message: 'API shorts urls is on!',
    });
  });

  routes.get('/rr/:code', adaptRedirect(makeRedirectUrl()));

  routes.post('/shorts', adaptRoute(makeCreateShortUrl()));
};
