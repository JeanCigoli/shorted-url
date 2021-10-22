import { RedirectUrl } from '../../domain/usecases';
import { serverError, ok } from '../../utils/response/response-redirect';
import { HttpRedirect, HttpRequest, Redirect } from '../protocols';

export class RedirectUrlController implements Redirect {
  constructor(private readonly redirectUrl: RedirectUrl) {}

  async handle(httpRequest: HttpRequest): Promise<HttpRedirect> {
    try {
      const result = await this.redirectUrl.redirect({
        code: httpRequest.params.code,
      });

      return ok(result);
    } catch (error) {
      switch (error) {
        default:
          return serverError(error);
      }
    }
  }
}
