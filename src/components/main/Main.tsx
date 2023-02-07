import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import AddButton from "./AddButton";
import { useEffect, useState } from "react";
import { BookInfoType } from "../../Type/interface";
import { bookSearchHandler, getBook } from "../../apis/api/book";
export default function Main(): JSX.Element {
  let [book, setBook] = useState<BookInfoType[]>([]);
  let [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (searchValue) {
      bookSearchHandler(searchValue, 1).then((res) => setBook(res.documents));
    }
  }, [searchValue]);
  return (
    <>
      <SearchInput setSearchValue={setSearchValue} />
      <AddButton />
      <ItemList book={book} />
    </>
  );
}
