import { useEffect, useState } from "react";
import { searchType } from "../../Type/interface";

export default function SearchInput({ setSearchValue }: searchType) {
  let [timer, setTimer] = useState<NodeJS.Timeout>();
  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      console.log("cleartimer");
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      try {
        await setSearchValue(e.target.value);
      } catch (e) {
        console.error(e);
      }
    }, 800);
    setTimer(newTimer);
  };
  return <input name="book" onChange={onChangeInputs} />;
}
