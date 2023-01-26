import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className=" ">DINESH</h1>
        <div className="nav-btn">
          <Link to="#contact" className="rounded-0 btn btn-md hero-btn">
            CONTACT
          </Link>
        </div>
      </nav>
    </>
  );
}
