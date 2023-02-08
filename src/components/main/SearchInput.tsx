import { useState } from "react";
import { searchType } from "../../Type/interface";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchInput({ setSearchValue, setSort }: searchType) {
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
  return (
    <InputGroup
      className="mb-3"
      onChange={onChangeInputs}
      style={{ width: "50%", margin: "40px auto" }}
    >
      <Form.Control />

      <DropdownButton
        variant="outline-secondary"
        title="Dropdown"
        id="input-group-dropdown-2"
        align="end"
      >
        <Dropdown.Item
          onClick={(e) => {
            setSort(0);
          }}
        >
          정확도순
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            setSort(1);
          }}
        >
          최신순
        </Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
}
