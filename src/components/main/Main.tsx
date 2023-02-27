import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { BookInfoType } from "../../Type/interface";
import { bookSearchHandler } from "../../apis/api/book";
import ItemList from "./ItemList";

import { MainLayout } from "./style";

type InterSectionType = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;
export default function Main(): JSX.Element {
  let sortel = ["accuracy", "latest"];
  let [sort, setSort] = useState(0);
  let [searchValue, setSearchValue] = useState("");
  let [bookList, getBookList] = useState<BookInfoType[]>([]);
  let [page, setPage] = useState(1);
  let [lastBook, setLastBook] = useState<HTMLImageElement | null>(null);
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
    if (searchValue) {
      bookSearchHandler(searchValue, sortel[sort], 1).then((res) =>
        getBookList(res.documents)
      );
    } else if (!searchValue) {
      getBookList([]);
    }
  }, [searchValue, sort]);

  useEffect(() => {
    if (searchValue) {
      bookSearchHandler(searchValue, sortel[sort], page).then((res) =>
        getBookList((prev) => [...prev, ...res.documents])
      );
    } else if (!searchValue) {
      getBookList([]);
    }
  }, [page]);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastBook) {
      console.log(lastBook);
      observer = new IntersectionObserver(interSection, {
        root: null,
        threshold: 1,
      });
      observer.observe(lastBook);
    }
    return () => observer && observer.disconnect();
  }, [lastBook]);

  return (
    <MainLayout>
      <SearchInput
        setSearchValue={setSearchValue}
        setSort={setSort}
        sort={sort}
      />
      <ItemList book={bookList} imgRef={setLastBook} />
    </MainLayout>
  );
}
