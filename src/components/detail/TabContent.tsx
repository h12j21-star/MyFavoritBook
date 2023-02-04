import { useEffect, useState } from "react";

export default function TabContent({ tab }: { tab: number }): JSX.Element {
  let [fade, setFade] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      setFade("end"); //두번째
    }, 100);

    return () => {
      setFade(""); //뗐다가 부착, 첫번째
    };
  }, [tab]);
  return (
    <div className={"start " + fade}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
    </div>
  );
}
