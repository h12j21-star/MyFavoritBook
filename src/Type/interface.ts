export interface BookInfoType {
  authors: string[];
  contents: string;
  price: number;
  publisher: string;
  sale_price: number;
  thumbnail: string;
  title: string;
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
