import { useState, useEffect } from "react";
import { bookSearchHandler } from "../../apis/api/book";
import { BookInfoType } from "../../Type/interface";

export default function Items() {
  let [book, setBook] = useState<BookInfoType[]>([]);
  useEffect(() => {
    console.log(
      bookSearchHandler("파친코", 1).then((res) => setBook(res.documents))
    );
  }, []);

  return book.map((item, i) => (
    <li key={i}>
      <p>item.title</p>
    </li>
  ));
}
