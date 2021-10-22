import { HttpRequest, HttpRedirect } from './http';

export interface Redirect {
  handle(httpRequest: HttpRequest): Promise<HttpRedirect>;
}
