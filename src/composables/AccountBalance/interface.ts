export interface IDataCurrentBalance {
  balanceCommerce: string;
}

export interface IResponseCurrentBalance extends IDataCurrentBalance {
  status: number;
  responseMessage: string;
}