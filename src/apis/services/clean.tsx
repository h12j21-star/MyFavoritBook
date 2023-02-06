import { BookType } from "../../Type/interface";

export const getClean = (bookInfo: BookType, size: number) => {
  for (let i = 0; i < size; i++) {
    const {
      authors,
      contents,
      price,
      publisher,
      sale_price,
      thumbnail,
      title,
    } = bookInfo.documents[i];
    return {
      authors,
      contents,
      price,
      publisher,
      sale_price,
      thumbnail,
      title,
    };
  }
};
