import React, { Fragment } from "react";
import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import Question from "./question/Question";

const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <div className="mx-auto w-full xss:w-full xs:w-full xs:mx-0 sm:px-4 md:w-11/12 xl-min:w-[70%]">
        <Categories />
        <Question />
      </div>
    </Fragment>
  );
};

export default HomePage;
