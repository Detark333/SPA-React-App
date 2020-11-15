import React from 'react';
import './Header.css'
import { Link } from "react-router-dom"
function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="favicon">SPA</div>
                <div>
                    <ul>
                        <li>
                            <Link className="link-style-header" to='/'>Каталог</Link>
                        </li>
                        <li>
                            <Link className="link-style-header" to='/cart'>Корзина</Link>
                        </li>
                        <li>
                            <svg width="48" height="13" viewBox="0 0 48 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="48" y2="0.5" stroke="black"/>
                                <line y1="6.5" x2="48" y2="6.5" stroke="black"/>
                                <line y1="12.5" x2="48" y2="12.5" stroke="black"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;