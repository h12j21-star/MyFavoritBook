import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">DIDI0Mall</Navbar.Brand>
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
              굿즈
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              호박페이지
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
    </>
  );
}
