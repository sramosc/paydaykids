import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from 'reactstrap'

class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">PayDay KIDS</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            {this.props.children}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }

}
export default NavBar
