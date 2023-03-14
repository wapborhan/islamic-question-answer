import React from "react";
import { FaSun, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <nav class="bg-white dark:bg-hadith-dark-card sticky shadow-sm top-0 z-50">
      <div className="container">
        <div class=" w-10/12 flex items-center justify-between h-20 py-8 xss:w-full xs:px-4 xs:min-w-full xs:p-0 sm:px-4 sm:min-w-full sm:p-0 md:p-0 xl:min-w-full">
          <div class="flex items-center justify-center gap-3 cursor-pointer">
            <img class="w-10 h-10" src="/assets/home-logo.png" alt="iHadith" />
            <h1 class="text-[1.7rem] leading-7 style-Kalpurush-webKit text-[#1fa471] xss:hidden xs:text-xl">
              আল হাদিস
            </h1>
          </div>
          <div class="items-center justify-between  ">
            <div class="flex items-center justify-center gap-10 leading-5 text-hadith-sm font-[100] lg-max:flex-col lg-max:px-8 lg-max:gap-4">
              <div class="bg-hadith-button-background flex items-center gap-x-3 rounded-full cursor-pointer lg-max:w-full lg-min:py-2 lg-min:px-5 lg-max:rounded-xl text-white">
                <FaHome />
                <p class="style-Kalpurush font-medium text-white text-lg leading-5 cursor-pointer">
                  হোম
                </p>
              </div>
              <p class="style-Kalpurush text-main-menu dark:text-hadith-deepoffwhite font-normal text-lg leading-5 cursor-pointer hover:lg-max:bg-subcat-hover hover:lg-max:text-white hover:xl-min:text-[#399e7b] lg-max:w-full lg-max:py-4 lg-max:px-6 lg-max:rounded-xl">
                বিভাগসমূহ
              </p>
              <p class="style-Kalpurush text-main-menu dark:text-hadith-deepoffwhite font-normal text-lg leading-5 cursor-pointer hover:lg-max:bg-subcat-hover hover:lg-max:text-white hover:xl-min:text-[#399e7b] lg-max:w-full lg-max:py-4 lg-max:px-6 lg-max:rounded-xl">
                প্রশ্ন সমূহ
              </p>
              <div class="w-10 h-10 rounded-lg bg-[#ECEEF0] dark:bg-[#383838] flex items-center justify-center">
                <FaSun />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
