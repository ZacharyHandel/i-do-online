import React from "react";
import "./HeaderBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const HeaderBar = () => {
    return(
        <nav className="nav">
            <Link to="/i-do-online" className="site-title">I Do! Online</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : "" }>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}


export default HeaderBar;
