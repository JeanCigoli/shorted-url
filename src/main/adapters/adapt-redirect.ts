import { Request, Response } from 'express';
import { HttpRequest } from '../../presentation/protocols/http';
import { Redirect } from '../../presentation/protocols/redirect';
import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words';

export function adaptRedirect(redirect: Redirect) {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: formateSnakeCaseKeysForCamelCase(req.body),
      params: formateSnakeCaseKeysForCamelCase(req.params),
      query: formateSnakeCaseKeysForCamelCase(req.query),
      headers: req.headers,
    };

    const httpResponse = await redirect.handle(httpRequest);

    return res.redirect(httpResponse.link);
  };
}
