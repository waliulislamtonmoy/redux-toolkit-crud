import React from "react";

import { Routes, Route } from "react-router";

import Navigation from "../Pages/Navigation";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Adduser from "../Pages/Adduser";
import Update from "../Pages/Update";

const Maincomponent = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adduser/" element={<Adduser />} />
        <Route path="update/:id" element={<Update />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Maincomponent;
