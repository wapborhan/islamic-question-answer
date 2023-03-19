import React from "react";
import { HiHome } from "react-icons/hi";
import Home from "../../assets/images/icons/home.svg";

const SideBar = () => {
  return (
    <div class="md-max:py-3 fixed bottom-0 w-full bg-white dark:bg-hadith-dark-card py-8 lg-min:max-w-[96px] lg-min:h-full lg-min:static md-max:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
      <div class="grid xss:grid-cols-5 xs:grid-cols-5 sm:grid-cols-5 md:grid-rows-1 md:grid-cols-5 lg-min:grid-rows-[1fr,56px,56px,56px,56px,56px,56px,1fr] lg:grid-cols-1 place-content-center place-items-center my-auto h-full gap-[4.5%]">
        <img
          class="p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-2 col-start-1 hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover"
          src={Home}
          alt=""
        />
        <img
          class="bg-hadith-button-background p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-3 hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover"
          src={Home}
          alt=""
        />
        <img
          class="hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover p-4 cursor-pointer md-max:p-2 md-max:w-9 rounded-lg lg-min:row-start-4"
          src={Home}
          alt=""
        />
        <img
          class="hover:bg-[#f8f8f9] hover:dark:bg-darkchapter-list-hover  md-max:p-2 md-max:w-9 p-4 rounded-lg cursor-pointer md-max:block lg-min:row-start-5 "
          src={Home}
          alt=""
        />
        <div class="lg-min:row-start-6 cursor-pointer md-max:hidden lg-min:block">
          <img class="" src={Home} alt="" />
        </div>
        <div
          class="fixed hidden  bottom-[100px] z-10 py-4 rounded-xl bg-white dark:bg-hadith-dark-card h-fit lg-min:block lg-min:left-28 lg-min:w-80 
      md-min:-translate-x-[200%] transition duration-500
      "
        >
          <div class="grid gap-6 pt-2.5 pb-4 lg-min:gap-0">
            <div class="bg-white dark:bg-hadith-dark-card rounded-xl pb-2 ">
              <h2 class="px-6 py-4 text-lg lg-min:hidden md-max:block">
                কুইক মেনু
              </h2>
              <div class="flex flex-col py-1">
                <div class="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/assets/sidebar/left/blog.svg" alt="" />
                  <p>প্রাইভেসি</p>
                </div>
                <div class="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/assets/sidebar/left/tick.svg" alt="" />
                  <p>তাহকিক</p>
                </div>
                <div class="flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/assets/sidebar/left/man.svg" alt="" />
                  <p>লেখক সম্পর্কে</p>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-hadith-dark-card rounded-xl pb-4 ">
              <div class="px-6 py-3">
                <div class="style-Kalpurush border-b dark:text-dark-text border-solid dark:border-none">
                  ডাউনলোড
                </div>
              </div>
              <div class="flex flex-col">
                <div class="style-Kalpurush-dropdown flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/assets/sidebar/left/project.svg" alt="" />
                  <p>আমাদের অন্যান্য প্রজেক্টস</p>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-hadith-dark-card rounded-xl pb-4 ">
              <div class="px-6 py-3 style-Kalpurush">
                <div class="style-Kalpurush border-b border-solid dark:border-none dark:text-dark-text">
                  সাপোর্ট করুন অথবা যোগাযোগ করুন
                </div>
              </div>
              <div class="flex flex-col">
                <div class="style-Kalpurush-dropdown flex gap-4 px-6 py-3 dark:text-dark-text hover:bg-[#FAFAFA] dark:hover:bg-darkchapter-list-hover cursor-pointer">
                  <img src="/assets/sidebar/left/help-hand.svg" alt="" />
                  <p>সাপোর্ট করুন</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg-min:row-start-7 cursor-pointer">
          <img
            class=" md-max:p-2 md-max:w-9  p-4 "
            src="/assets/leftbar/dark/goto.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
