import { Navbar, Nav, Container,NavDropdown,Form,Button  } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >Tienda-UNIR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/hombre">Hombre</Nav.Link>
                <Nav.Link as={Link} to="/mujer">Mujer</Nav.Link>     
                <Nav.Link as={Link} to="/electronica">Electronica</Nav.Link>      
                
               
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/hombre">Hombres</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mujer">Mujeres</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/electronica">Electronica</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
                <Nav.Link className="me-left" as={Link} to="/login">Login</Nav.Link>             
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample