import React from "react";
import QuesCard from "./QuesCard";

const Question = () => {
  return (
    <div className="mt-[75px] xss:mt-10 xs:mt-10 lg-max:max-w-[94%] lg-max:mx-auto sm:mt-9 md:p-0 md:mt-[35px] lg:mt-[65px]">
      <h3 className="flex items-center justify-center font-semibold text-hadith-black dark:text-hadith-deepoffwhite mb-[15px] xss:text-[22px] xs:text-[22px] sm:text-[22px] md:text-[28px] lg-min:text-[35px] lg-min:leading-[52.5px]">
        বিষয়ভিত্তিক প্রশ্ন
      </h3>
      <div className="flex items-center justify-center title">
        <p className="mb-[35px] leading-6 text-center text-[#626D7D] dark:text-hadith-deepoffwhite xs:w-full xss:text-sm xs:text-sm sm:text-sm xs:leading-5 sm:w-full md:w-11/12 md:text-[15px] lg-min:w-6/12 lg:text-[15px] xl: 2xl:text-[15px]">
          দুনিয়াবি জীবনকে আখিরাতের জন্য প্রস্তুত করতে গিয়ে কত প্রশ্নই না আসে
          আমাদের অন্তরে, আল্লাহর বান্দাদের সেসব প্রশ্নের উত্তর খোজার চেষ্টা
          করেছেন শায়খ আহমাদুল্লাহ।
        </p>
      </div>
      <div className="grid gap-4 mb-[45px] sm:grid-cols-2 sm:mb-9 md:grid-cols-2 lg-min:grid-cols-2">
        {/*  */}
        <QuesCard />
        <QuesCard />
        <QuesCard />
        <QuesCard />
        {/*  */}
      </div>
      <div className="flex items-center justify-center">
        <div className="py-[15px] text-white px-[20px] bg-hadith-button-background rounded-xl hover:drop-shadow-[0_10px_6px_rgba(0,0,0,0.1)]">
          <div className="text-base flex gap-3 cursor-pointer">
            <img src="/assets/leftbar/fill/active/book.svg" alt="" />
            সকল প্রশ্নসমূহ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
