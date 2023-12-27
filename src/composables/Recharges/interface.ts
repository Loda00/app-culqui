export interface IResponseProviders {
  status: string;
  responseMessage: string;
  data: {
    companies: ICompanies[]
  }
}

export interface ICompanies {
  company: string;
  _id: string;
  image: string;
  star?: boolean;
}