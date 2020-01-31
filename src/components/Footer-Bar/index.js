import React from 'react';
import { Link } from 'react-router-dom';

const FooterBar = () => (
    <footer id="main-footer">
        <Link to="/">
            <i className="material-icons"> home </i>
        </Link>
    </footer>
)

export default FooterBar;