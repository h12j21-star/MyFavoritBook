import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

import { DataType } from "./ItemList";
import MoreButton from "./MoreButton";

export default function Item({ item, setItem }: DataType) {
  let navigate = useNavigate();
  return (
    <>
      {item.map((data) => {
        return (
          <Col>
            <img
              onClick={() => {
                navigate(`/detail/${data.id}`);
              }}
              src={`../../img/${data.image}`}
              alt={data.title}
              style={{ width: "50px", height: "70px" }}
            />
            <h2>{data.title}</h2>
          </Col>
        );
      })}
      <MoreButton item={item} setItem={setItem} />
    </>
  );
}
