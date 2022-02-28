export type GenericAxiosResponse<T> = {
  code: string;
  data: T;
  status: number;
};

export type GenericResponse<T> = {
  results: T;
};
