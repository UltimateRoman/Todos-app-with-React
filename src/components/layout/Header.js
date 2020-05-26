import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todos List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About
            </Link>
        </header>
    )
}

const headerStyle = {
    color: 'white',
    background: 'black',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: 'white'
}

export default Header;