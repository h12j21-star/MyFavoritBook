import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  let navigate = useNavigate();
  return (
    <>
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
      <div className="main-bg"></div>
    </>
  );
}
