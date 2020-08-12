import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Link from "next/link";

const StyledNavLink = (props) => {
    const { title, href } = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    );
};

const StyledNavBrand = () => (
    <Link href="/">
        <a className="navbar-brand port-navbar-brand">Fun Test App</a>
    </Link>
);

const LoginBtn = () => (
    <a className="nav-link port-navbar-link" href="/api/v1/login">
        Login
    </a>
);

const LogoutBtn = () => (
    <a className="nav-link port-navbar-link" href="/api/v1/logout">
        Logout
    </a>
);

const Header = ({ user, loading, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar
                className={`port-navbar port-default absolute ${className}`}
                dark
                expand="md"
            >
                <StyledNavBrand />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink href="/" title="Home" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink href="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink
                                href="/portfolios"
                                title="Portfolios"
                            />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink href="/blogs" title="Blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink href="/resume" title="Resume" />
                        </NavItem>
                        {/* <NavItem className="port-navbar-item">
                            <StyledNavLink href="/secret" title="Secret" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink
                                href="/secretssr"
                                title="SecretSSR"
                            />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink href="/admin" title="Admin" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <StyledNavLink href="/adminssr" title="AdminSSR" />
                        </NavItem> */}
                    </Nav>
                    <Nav navbar>
                        {!loading && (
                            <>
                                {!user && (
                                    <NavItem className="port-navbar-item">
                                        <LoginBtn />
                                    </NavItem>
                                )}
                                {user && (
                                    <>
                                        <NavItem className="port-navbar-item">
                                            <LogoutBtn />
                                        </NavItem>
                                        <NavItem className="port-navbar-item">
                                            <p className="nav-link port-navbar-link">
                                                {user.name}
                                            </p>
                                        </NavItem>
                                    </>
                                )}
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
