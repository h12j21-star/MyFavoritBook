import { getClean } from "../services/clean";
import { authInstance } from "../utils/instance";
interface queryType {
  query: string;
  sort: string;
  page: number;
  size: number;
}
export const getBook = async (params: queryType) => {
  try {
    const { data } = await authInstance.get("/v3/search/book", { params });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const bookSearchHandler = async (query: string, sort: string) => {
  const params = {
    query: query,
    sort: sort,
    page: 1,
    size: 10,
  };
  const data = await getBook(params);
  // const bookdata = await getClean(data, params.size);
  // console.log(bookdata);
  return data;
};
