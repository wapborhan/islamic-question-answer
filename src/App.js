import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./home/HomePage";
import NotFound from "./components/Notfound";
import Categories from "./pages/categories/Categories";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<Pages />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
