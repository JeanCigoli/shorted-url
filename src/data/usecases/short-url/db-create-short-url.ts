import { v4 as uuid } from 'uuid';
import { CreateShortUrl } from '../../../domain/usecases';
import { generateCode } from '../../../utils/code';
import { CreateShortUrlRepository } from '../../protocols/db/mongo';
import { AddDay, GenerateCode } from '../../protocols/utils';

export class DbCreateShortUrl implements CreateShortUrl {
  constructor(
    private readonly createShortUrlRepository: CreateShortUrlRepository,
    private readonly addDays: AddDay,
    private readonly generateCode: GenerateCode,
  ) {}

  async create(params: CreateShortUrl.Params): CreateShortUrl.Result {
    const code = this.generateCode(4);

    await this.createShortUrlRepository.create({
      shortUrlId: uuid(),
      code,
      createdAt: new Date(),
      updateAt: new Date(),
      validity: this.addDays(new Date(), params.daysValidity),
      quantityAccess: 0,
      singleAccess: params.isSingleAccess,
      status: true,
      url: params.url,
    });

    return {
      link: `http://localhost:3355/rr/${code}`,
    };
  }
}
