import ItemList from "../components/main/Main/ItemList";
import { ItemType } from "../routes/Router";

export interface DataType {
  item: ItemType[];
  setItem: React.Dispatch<React.SetStateAction<ItemType[]>>;
}
export default function Main({ item, setItem }: DataType) {
  return <ItemList item={item} setItem={setItem} />;
}
