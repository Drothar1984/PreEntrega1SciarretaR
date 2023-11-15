//funcion de primera linea - barra de navegacion
import Container from 'react-bootstrap/Container';
//importacion de herramientas bootstrap
import Nav from 'react-bootstrap/Nav';
//importacion de herramientas bootstrap - navbar
import Navbar from 'react-bootstrap/Navbar';
//importacion de la funcion carrito
import CarWidget from '../CarWidget/CarWidget';
//importacion de la funcion logo
import Logo from './Logo';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#procedencia">Procedencia</Nav.Link>
            <Nav.Link href="#clasificacion">Clasificación</Nav.Link>
            <Nav.Link href="#categorias">Categorías</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#CarWidget" className='carwidget'><CarWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar