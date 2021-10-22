import { RedirectUrl } from '../../../domain/usecases';
import {
  ListShortUrlByCodeRepository,
  UpdateShortUrlRepository,
} from '../../protocols/db/mongo';

export class DbRedirectUrl implements RedirectUrl {
  constructor(
    private readonly listShortUrlByCodeRepository: ListShortUrlByCodeRepository,
    private readonly updateShortUrlRepository: UpdateShortUrlRepository,
  ) {}

  async redirect(params: RedirectUrl.Params): RedirectUrl.Result {
    const short = await this.listShortUrlByCodeRepository.findByCode(
      params.code,
    );

    if (!short || !short.status) {
      return {
        link: 'https://pagtel.com.br/not-found',
      };
    }

    if (short.singleAccess) {
      await this.updateShortUrlRepository.update(
        {
          updateAt: new Date(),
          status: false,
          quantityAccess: +short.quantityAccess + 1,
        },
        params.code,
      );

      return {
        link: short.url,
      };
    }

    await this.updateShortUrlRepository.update(
      {
        updateAt: new Date(),
        quantityAccess: +short.quantityAccess + 1,
      },
      params.code,
    );

    return {
      link: short.url,
    };
  }
}
