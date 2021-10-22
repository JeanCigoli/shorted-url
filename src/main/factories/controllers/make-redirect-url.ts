import { DbRedirectUrl } from '../../../data/usecases';
import { ShortUrlRepository } from '../../../infra/db/mongo';
import { RedirectUrlController } from '../../../presentation/controllers';

export const makeRedirectUrl = () => {
  const shortUrlRepository = new ShortUrlRepository();

  const dbRedirectUrl = new DbRedirectUrl(
    shortUrlRepository,
    shortUrlRepository,
  );

  return new RedirectUrlController(dbRedirectUrl);
};
