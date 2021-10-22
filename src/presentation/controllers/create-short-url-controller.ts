import { CreateShortUrl } from '../../domain/usecases';
import { created, serverError } from '../../utils/response/response';
import { Controller, HttpRequest, HttpResponse } from '../protocols';

export class CreateShortUrlController implements Controller {
  constructor(private readonly createShortUrl: CreateShortUrl) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.createShortUrl.create(httpRequest.body);

      return created('Link gerado com sucesso', result);
    } catch (error: any) {
      switch (error.message) {
        default:
          return serverError(error);
      }
    }
  }
}
