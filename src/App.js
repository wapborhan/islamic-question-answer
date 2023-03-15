import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./home/HomePage";
import NotFound from "./components/Notfound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-hadith-dark-bg style-bn">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
