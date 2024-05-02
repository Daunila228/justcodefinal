import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap'
import '../index.css'
import { useSelector } from 'react-redux';



function Header() {
  const cartItems = useSelector(state => state.cart.cart)
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar" style={{borderBottom: '1px solid black'}}>
        <Container>
          <Navbar.Brand href="/"><h1>AirDNL</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: 800}}>
            <Nav className="me-auto">
              <Nav.Link href={'/'}>Home</Nav.Link>
              <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href={'/about'}>
                  About us
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={'/contacts'}>Contact us</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;