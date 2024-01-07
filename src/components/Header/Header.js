import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const account = useSelector(state => state.user.account)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }
    return (<Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <NavLink to={`/`} className="navbar-brand">Hỏi dân IT</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to={`/`} className={`nav-link`}>Home</NavLink>
                    <NavLink to={`/user`} className={`nav-link`}>User</NavLink>
                    <NavLink to={`/admin`} className={`nav-link`}>Admin</NavLink>

                </Nav>
                <Nav>
                    {isAuthenticated ?
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                            <NavDropdown.Item>Userinfo</NavDropdown.Item>
                        </NavDropdown>
                        :
                        <>
                            <button className="btn-login" onClick={() => handleLogin()}>Log in</button>
                            <button className="btn-signup" onClick={() => handleRegister()}>Sign up</button>
                        </>
                    }


                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default Header;