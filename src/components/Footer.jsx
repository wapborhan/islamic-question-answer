import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container  pt-10 pb-10 mt-12 xss:max-w-full xs:max-w-full sm:max-w-full md:px-6 md:w-full ">
        <div className="text-center text-white">Copyright 2023</div>
        {/* <div className="flex items-center xs-max:w-full gap-3 pt-10 mb-5 xss:mb-4 xss:w-14 xss:h-14 xss:pt-0 sm:mt-10">
        <img className="w-10" src="/assets/home-logo.png" alt="hadith-logo" />
        <h1 className="text-[1.7rem] font-medium text-hadith-logo-color">
          আল হাদিস
        </h1>
      </div>
      <div className="grid w-full gap-4 xss:grid-cols-2 xs:grid-cols-2 md-max:gap-y-7 md-max:grid-cols-[38%,28.5%,28.5%] lg:grid-cols-[45%,24.5%,24.5%] lg-min:grid-cols-[33%,23%,20%,20%]">
        <div className="xss:col-span-2 xs:col-span-2 sm:col-span-3 sm:w-full md:col-span-full lg:col-span-full">
          <h3 className=" text-lg font-semibold text-hadith-black dark:text-hadith-deepoffwhite xss:text-[15px] xs:text-[15px]">
            হাদিস পড়ুন, শিখুন এবং জানুন
          </h3>
          <p className="mt-2.5 text-hadith-dark dark:text-hadith-deepoffwhite xss:text-sm xss:mb-4 xss:w-full xs:text-[16px] xs:w-full xs:m-0 md:w-full lg:leading-6 lg-min:w-10/12">
            আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উত্তম উৎস থেকে বিশুদ্ধ হাদীস
            সকলের জন্য উন্মুক্ত করে দেয়া। আমরা এই ওয়েবসাইটটি সর্বাধিক গুরুত্বের
            সাথে তৈরি করেছি যাতে যে কেউ সহজেই হাদিস শিখতে ও শিখাতে পারে। আমরা
            আপনাদের একান্ত সহযোগিতা চাই এই ওয়েবসাইটটি সহ আমাদের পুরো প্রজেক্টের
            পরিসর বাড়িয়ে এগিয়ে যেতে। আমাদের একটি মোবাইল অ্যাপ রয়েছে যাতে আপনি
            যেকোনো স্থানে যেকোন সময় স্বাচ্ছন্দ্যে হাদীস পড়তে পারেন।
          </p>
        </div>
        <div className="xss:col-span-2 xs:col-span-full">
          <h2 className="font-semibold text-lg text-hadith-black dark:text-hadith-deepoffwhite xss:text-[15px] xs:text-[14px]">
            নেভিগেট
          </h2>
          <div className="grid grid-cols-2 gap-x-2 md-min:pb-2">
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              হাদিস গ্রন্থসমূহ
            </span>
            <span className="row-start-2 inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              বিষয়ভিত্তিক হাদিস
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              আমাদের প্রজেক্ট
            </span>
            <span className="row-start-3 inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              প্রাইভেসি পলিসি
            </span>
            <span className="row-start-4 inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              সাপোর্ট করুন
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              তাহকিক
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              লেখক
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              ফেসবুক পেইজ
            </span>
          </div>
        </div>
        <div className="xss:place-self-start xs:place-self-start">
          <h2 className="font-semibold text-lg text-hadith-black dark:text-hadith-deepoffwhite xss:text-[15px] xs:text-[14px]">
            আমাদের প্রজেক্ট সমূহ
          </h2>
          <div className="grid gap-x-3 grid-rows-4">
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              আল হাদিস
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              কুরআন মাজিদ
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              দোয়া ও রুকিয়াহ
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              আইআরডি ফাউন্ডেশন
            </span>
          </div>
        </div>
        <div className="xss:place-self-start sm:place-self-start">
          <h2 className="font-semibold text-lg text-hadith-black dark:text-hadith-deepoffwhite xss:text-[15px] xs:text-[14px]">
            জনপ্রিয় সাইটসমূহ
          </h2>
          <div className="grid gap-x-3 grid-rows-4">
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              Quran.com
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              Sunnah.com
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              Islamhouse.com
            </span>
            <span className="undefined inline-block w-fit text-base leading-9 text-hadith-dark dark:text-[#6c6c6c] xss:text-[14px] cursor-pointer">
              Response-Anti-Islam
            </span>
          </div>
        </div>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
