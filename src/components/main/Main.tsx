import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { BookInfoType } from "../../Type/interface";
import { bookSearchHandler } from "../../apis/api/book";
import ItemList from "./ItemList";

export default function Main(): JSX.Element {
  let [book, setBook] = useState<BookInfoType[]>([]);
  let sortel = ["accuracy", "latest"];
  let [sort, setSort] = useState(0);
  let [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (searchValue) {
      bookSearchHandler(searchValue, sortel[sort]).then((res) =>
        setBook(res.documents)
      );
    }
  }, [searchValue, sort]);
  return (
    <>
      <SearchInput setSearchValue={setSearchValue} setSort={setSort} />
      <ItemList book={book} />
    </>
  );
}
