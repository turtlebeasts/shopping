import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav bg-dark navbar-dark p-2 sticky-top">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
      </li>
    </ul>
  );
}
