import React from "react";
import Header from "../components/pages/Header";
import SideBar from "../components/pages/SideBar";
import Categories from "./categories/Categories";
import CatList from "./categories/CatList";

const Pages = () => {
  return (
    <div className="w-full max-h-screen bg-white dark:bg-hadith-dark-card relative style-bn">
      <Header />
      <div className="justify-between calctest xss:flex md-min:flex">
        <div className="xss:max-w-full xss:left-0 xs:left-0 sm:left-0 md:rounded-none md:left-0 fixed right-0 left-24 h-full items-center bg-hadith-body-grey-bg dark:bg-hadith-dark-bg justify-center lg-min:rounded-tl-3xl dark:lg-min:rounded-tl-3xl ">
          <div
            id="scrollToTop"
            class="px-5 xs:pb-12 sm:pb-12 md-max:px-3 md:pb-10 lg:pb-20  md-max:overflow-y-auto md-max:h-screen"
          >
            <Categories />
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Pages;
