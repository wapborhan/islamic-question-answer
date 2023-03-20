import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Notfound";
import HomePage from "./home/HomePage";
import Pages from "./pages/Pages";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/*" element={<Pages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
