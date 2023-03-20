import React from "react";
import { Route, Routes } from "react-router-dom";
import AnsSide from "./answar/AnsSide";
import Answar from "./answar/Answar";
import CatList from "./CatList";

const Categories = () => {
  return (
    <div class="grid gap-4 xl-min:gap-6 py-5 xss:pt-24 xss:pb-9 xs:pb-6 sm:col-start-1 sm-max:pt-[5rem] sm:pb-7 md:col-start-1 md:pb-6 md:pt-20 lg:grid-cols-1 xl:grid-cols-[350px,1fr] 2xl-min:grid-cols-[350px,1fr,335px] ">
      <CatList />
      <Answar />
      <AnsSide />
      <Routes>
        <Route path="/answar/1" />
      </Routes>
    </div>
  );
};

export default Categories;
