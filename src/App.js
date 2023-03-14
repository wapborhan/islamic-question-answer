import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./home/banner/Banner";
import Categories from "./home/categories/Categories";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-hadith-dark-bg style-bn">
      <Header />
      <Banner />
      <div className="mx-auto w-full xss:w-full xs:w-full xs:mx-0 sm:px-4 md:w-11/12 xl-min:w-[70%]">
        <Categories />
      </div>
      <Footer />
    </div>
  );
}

export default App;
