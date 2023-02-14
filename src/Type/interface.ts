export interface BookInfoType {
  authors: string[];
  isbn: string;
  contents: string;
  price: number;
  publisher: string;
  sale_price: number;
  thumbnail: string;
  title: string;
  url: string;
}

export interface BookProps {
  book: BookInfoType[];
  setBook: React.Dispatch<React.SetStateAction<BookType[]>>;
}
export interface BookType {
  documents: BookInfoType[];
  meta: object;
}

export interface ItemType {
  id: number;
  title: string;
  content: string;
  price: number;
  image?: string;
}

export interface TabType {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

export interface searchType {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  sort: number;
  setSort: React.Dispatch<React.SetStateAction<number>>;
}

export interface PropsBookType {
  book: BookInfoType[];
}
interface HeartFType {
  heart: boolean;
  heartColor: string;
}
export type HeartOn = (event: React.MouseEvent<SVGSVGElement>) => HeartFType;
