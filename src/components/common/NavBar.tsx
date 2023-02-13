import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <header>
        <h1 className="ir">도서 검색 사이트</h1>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">DIDI0Book</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/");
                }}
              >
                My Book List
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div className="main-bg"></div>
    </>
  );
}
