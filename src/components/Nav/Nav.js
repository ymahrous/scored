import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <div className='links ma3'>
                <Link className='f3 pa3 pointer' to='/'>Home</Link>
                <Link className='f3 pa3 pointer' to='/contact'>Contact</Link>
                <Link className='f3 pa3 pointer' to='/about'>About</Link>
            </div>
        )
    }
}

export default Navigation;