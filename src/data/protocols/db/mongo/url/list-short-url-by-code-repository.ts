import { ShortUrl } from '../../../../../domain/models';

export interface ListShortUrlByCodeRepository {
  findByCode(code: string): ListShortUrlByCodeRepository.Result;
}

export namespace ListShortUrlByCodeRepository {
  export type Result = Promise<ShortUrl>;
}
