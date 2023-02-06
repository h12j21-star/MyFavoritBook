export interface BookInfoType {
  authors: string[];
  contents: string;
  price: number;
  publisher: string;
  sale_price: number;
  thumbnail: string;
  title: string;
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

export interface DataType {
  item: ItemType[];
  setItem: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

export interface TabType {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}
