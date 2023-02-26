import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">DIDI0Book</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
