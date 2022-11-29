import Image from "next/image";
import React, { useState } from "react";
import logoImg from "../public/images/logoimg.jpg";
const Navbar = () => {
  const [activeNav, setIsActiveNav] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand p-2">
          <Image
            src={logoImg}
            alt="Logo"
            width={80}
            height={53}
            style={{ borderRadius: "8px" }}
          />

          <span
            className="navbar-burger burger"
            data-target="navbarMenu"
            onClick={() => setIsActiveNav((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div
          id="navbarMenu"
          className={`navbar-menu ${activeNav ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className=" navbar-item">
              <div className="control has-icons-left">
                <input
                  className="input is-rounded"
                  type="email"
                  placeholder="Search"
                />
                <span className="icon is-left">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
            <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
              Home
            </a>
            <a className="navbar-item is-size-5 has-text-weight-semibold">
              Examples
            </a>
            <a className="navbar-item is-size-5 has-text-weight-semibold">
              Features
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
