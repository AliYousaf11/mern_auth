import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  // const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            style={{ color: "#F6D327" }}
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav me-auto m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/addproduct"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Add-Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/product"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/users"
                  className="nav-link"
                  style={{ color: "#F6D327" }}
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i
                className="fas fa-shopping-cart"
                style={{ color: "#F6D327" }}
              ></i>
            </a>
            <div className="dropdown">
              <a
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span
                  className="badge rounded-pill badge-notification bg-yellow"
                  style={{ backgroundColor: "#F6D327" }}
                >
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <a
                // onClick={() => setShow(!show)}
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>

              {/* {show ? alert("ali") : alert("hello ali")} */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
