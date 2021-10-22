import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
} from '@badass-team-code/formatted-cases-words';
import {
  CreateShortUrlRepository,
  ListShortUrlByCodeRepository,
  UpdateShortUrlRepository,
} from '../../../data/protocols/db/mongo';
import { MongoHelper } from './helpers';

export class ShortUrlRepository
  implements
    CreateShortUrlRepository,
    UpdateShortUrlRepository,
    ListShortUrlByCodeRepository
{
  async update(
    params: UpdateShortUrlRepository.Params,
    code: string,
  ): UpdateShortUrlRepository.Result {
    const shortCollection = await MongoHelper.getCollection(
      'short-url-collection',
    );

    const data = await shortCollection.updateOne(
      {
        code,
      },
      {
        $set: formateCamelCaseKeysForSnakeCase(params),
      },
    );

    return data.result;
  }

  async create(
    params: CreateShortUrlRepository.Params,
  ): CreateShortUrlRepository.Result {
    const shortCollection = await MongoHelper.getCollection(
      'short-url-collection',
    );

    const data = await shortCollection.insertOne(
      formateCamelCaseKeysForSnakeCase(params),
    );

    return formateSnakeCaseKeysForCamelCase(data);
  }

  async findByCode(code: string): ListShortUrlByCodeRepository.Result {
    const shortCollection = await MongoHelper.getCollection(
      'short-url-collection',
    );

    const data = await shortCollection.findOne({
      code,
    });

    return formateSnakeCaseKeysForCamelCase(data);
  }
}
