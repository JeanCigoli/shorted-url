import { DbCreateShortUrl } from '../../../data/usecases';
import { ShortUrlRepository } from '../../../infra/db/mongo';
import { CreateShortUrlController } from '../../../presentation/controllers';
import { generateCode } from '../../../utils/code';
import { sumDays } from '../../../utils/date';

export const makeCreateShortUrl = () => {
  const shortUrlRepository = new ShortUrlRepository();

  const dbCreateShortUrl = new DbCreateShortUrl(
    shortUrlRepository,
    sumDays,
    generateCode,
  );

  return new CreateShortUrlController(dbCreateShortUrl);
};
