import { useEffect, useState } from "react";
import { bookSearchHandler } from "../../apis/api/book";
import { BookInfoType } from "../../Type/interface";
import Item from "./Item";

export default function ItemList() {
  let [book, setBook] = useState<BookInfoType[]>([]);
  useEffect(() => {
    bookSearchHandler("파친코", 1).then((res) => setBook(res.documents));
  }, []);
  console.log(book);
  return (
    <>
      {book ? (
        book.map((item: BookInfoType) => (
          <>
            <Item {...item} />
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
}
