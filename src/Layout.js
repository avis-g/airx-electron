import React from "react";
import { Link, withRouter } from "react-router-dom";

const Layout = () => {
  const nav = () => {
    return (
      <ul className="nav nav-tabs bg-secondary">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    );
  };
  return <>{nav()}</>;
};

export default Layout;
