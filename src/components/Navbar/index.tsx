import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react"

export const NavbarComponent = () => {
    const categoryList = ["cpu", "storage", "ram", "monitor", "keyboard", "mouse", "power_supply", "motherboard"]
    const {data, status} = useSession()
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">PC House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            {
                                categoryList.map(((category, index) => (
                                    <NavDropdown.Item
                                        key={index}
                                        href={`/products/${category}`}>{category.toUpperCase()}</NavDropdown.Item>
                                )))
                            }
                        </NavDropdown>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {
                            status === "authenticated" ?
                                <Nav.Link onClick={() => signOut()}>Sign Out</Nav.Link>
                                :
                                <Nav.Link href="/login">Sign in</Nav.Link>
                        }
                        {/*<Nav.Link onClick={() => signIn('google')}>Sign in</Nav.Link>*/}
                    </Nav>
                    <Link href={'/build-pc'}>
                        <Button variant="dark">PC Builder</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}