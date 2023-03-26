import React from "react";

// pages ..
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";

// views...
import { Home } from "../view/Home";
import { Contact } from "../view/Contact";
import { Product } from "../view/Product";
import { Admin } from "../view/Admin";
import { Users } from "../view/Users";
import { AddProduct } from "../view/AddProduct";

// common....
import { Navbar } from "../view/Navbar";
import { Footer } from "../view/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
