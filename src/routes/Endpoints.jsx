import { Home, Store, Team, Contact } from "pages";
import { Routes, Route } from "react-router-dom";

const Endpoints = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        \<Route path="/team" element={<Team />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export { Endpoints as Routes };
