import { Routes, Route } from "react-router-dom";
import { Home, Store, Team, Contact, SingleProductPage, Journey } from "pages";

const Endpoints = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/store" element={<Store />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/store/:pid" element={<SingleProductPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export { Endpoints as Routes };
