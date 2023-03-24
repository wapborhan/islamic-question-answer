import React, { Fragment, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Question from "./question/Question";
import DATA from "../assets/data/data.json";

const HomePage = () => {
  const [questData, setQuestData] = useState(DATA);

  return (
    <Fragment>
      <div className="bg-gray-50 dark:bg-hadith-dark-bg style-bn">
        <Header />
        <Banner />
        <div className="mx-auto w-full xss:w-full xs:w-full xs:mx-0 sm:px-4 md:w-11/12 xl-min:w-[70%]">
          <Categories />
          <Question data={questData} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default HomePage;
