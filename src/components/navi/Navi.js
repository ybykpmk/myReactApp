import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { isOpen: false };
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <div>
                <Navbar color='light' light expand='md'>
                    <NavbarBrand href="/">Northwind Mağazası</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/saveproduct/">Ürün Ekle
                                </NavLink>
                            </NavItem>
                            <CartSummary></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}