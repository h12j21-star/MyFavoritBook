import { useEffect, useRef, useState } from "react";
import { bookSearchHandler } from "../apis/api/book";

type InterSectionType = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

export default function GetBookList(input: string, sort: string) {
  let [bookList, getBookList] = useState([]);
  let [page, setPage] = useState(1);
  // target 지정하기 : 마지막 요소
  let target = document.querySelector(".target");
  let [lastBook, setLastBook] = useState<Element | null>(target);

  const getBook = () => {
    console.log(input);

    bookSearchHandler(input, sort, page).then((res) =>
      getBookList((prev) => prev.concat(res.documents))
    );
  };
  const interSection: InterSectionType = (entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };
  useEffect(() => {
    bookSearchHandler(input, sort, page).then((res) =>
      getBookList((prev) => prev.concat(res.documents))
    );
  }, [input, sort, page]);
  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastBook) {
      observer = new IntersectionObserver(interSection, {
        root: null,
        threshold: 0.5,
      });
      observer.observe(lastBook);
    }
    return () => observer && observer.disconnect();
  }, [lastBook]);
  return { bookList };
}
