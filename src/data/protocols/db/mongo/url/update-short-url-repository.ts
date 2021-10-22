import { ShortUrl } from '../../../../../domain/models';

export interface UpdateShortUrlRepository {
  update(
    params: UpdateShortUrlRepository.Params,
    code: string,
  ): UpdateShortUrlRepository.Result;
}

export namespace UpdateShortUrlRepository {
  export type Params = Partial<ShortUrl>;

  export type Result = Promise<any>;
}
