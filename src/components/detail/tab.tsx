import Nav from "react-bootstrap/Nav";
import TabContent from "./TabContent";

interface TabType {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

function JustifiedExample({ tab, setTab }: TabType) {
  return (
    <>
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link-0"
          >
            책 소개
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link-1"
          >
            상품 리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link-2"
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );
}

export default JustifiedExample;
