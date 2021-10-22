export interface CreateShortUrl {
  create(params: CreateShortUrl.Params): CreateShortUrl.Result;
}

export namespace CreateShortUrl {
  export type Params = {
    url: string;
    daysValidity: number;
    isSingleAccess: boolean;
  };

  export type Result = Promise<{
    link: string;
  }>;
}
