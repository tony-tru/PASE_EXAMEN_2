import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const Naveg = ()=>{
    return(<div >
      <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="#">
          <Link className="text-light text-decoration-none " to='/'>
            <Image src='house.png' className='ImagenLogo'></Image>
            INICIO</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
                <Link className="text-light  text-decoration-none " to='App'>
                  <Image src='superman.png' className='ImagenLogo'></Image>
                HEROES</Link></Nav.Link>
            <Nav.Link href="#">
                <Link className="text-light  text-decoration-none " to='App2'>
                  <Image src='bufon.png' className='ImagenLogo'></Image>
                VILLANOS</Link></Nav.Link>
            <Nav.Link href="#">
                <Link className="text-light  text-decoration-none " to='About'>
                  <Image src='flash.png' className='ImagenLogo'></Image>
                NOSOTROS</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
    )
  }
export default Naveg;