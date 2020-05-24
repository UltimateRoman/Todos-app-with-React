import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todos List</h1>
        </header>
    )
}

const headerStyle = {
    color: '#fff',
    background: '#333',
    textAlign: 'center',
    padding: '10px'
}

export default Header;