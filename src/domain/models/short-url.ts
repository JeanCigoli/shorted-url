export type ShortUrl = {
  shortUrlId: string;
  url: string;
  code: string;
  status: boolean;
  singleAccess: boolean;
  quantityAccess: number;
  validity: Date;
  createdAt: Date;
  updateAt: Date;
};
