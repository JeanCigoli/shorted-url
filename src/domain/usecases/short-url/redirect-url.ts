export interface RedirectUrl {
  redirect(params: RedirectUrl.Params): RedirectUrl.Result;
}

export namespace RedirectUrl {
  export type Params = {
    code: string;
  };

  export type Result = Promise<{
    link: string;
  }>;
}
