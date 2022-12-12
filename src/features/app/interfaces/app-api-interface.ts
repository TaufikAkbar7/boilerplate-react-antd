export interface IApiResponse<T> {
  message: string;
  result: T;
}

export interface IApiResponseError {
  message: string;
  errors?: {
    message: string;
    field?: string;
  }[];
}
