import { ShortUrl } from '../../../../../domain/models';

export interface CreateShortUrlRepository {
  create(
    params: CreateShortUrlRepository.Params,
  ): CreateShortUrlRepository.Result;
}

export namespace CreateShortUrlRepository {
  export type Params = ShortUrl;

  export type Result = Promise<any>;
}
