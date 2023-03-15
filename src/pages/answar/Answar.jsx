import React from "react";
import AnsList from "./AnsList";

const Answar = () => {
  return (
    <div className="lg-max:col-span-full">
      <div className="col-start-2 xss:col-start-1 xss:-mt-4 xs:col-span-3 md-max:col-start-1 md-max:col-span-full lg:col-span-3">
        <div class="block lg-max:hidden">
          <div class="hidden lg-min:block">
            <div
              id="bread-crumb"
              class="h-14 px-5 py-4 gap-2 flex w-full items-center 
    bg-[#FAFBFB] dark:bg-hadith-dark-card rounded-t-xl text-[#667085] 
    dark:text-hadith-deepoffwhite text-sm border-b-2 border-b-[#ECEEF0] 
    dark:border-b-dark-cat-border cursor-pointer
    lg-max:hidden"
            >
              <div class="flex flex-row">
                <div>
                  <img
                    class="dark:hidden block"
                    src="/assets/others/bread-crumb-book.svg"
                    alt=""
                  />
                  <img
                    class="dark:block hidden"
                    src="/assets/others/bread-crumb-book-dark.svg"
                    alt=""
                  />
                </div>
                <div class="flex flex-row">
                  <img
                    class="dark:hidden block"
                    src="/assets/others/forword.svg"
                    alt=""
                  />
                  <img
                    class="dark:block hidden"
                    src="/assets/others/forword-dark.svg"
                    alt=""
                  />
                  <a href="/bukhari">Bukhari</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnsList />
      </div>
    </div>
  );
};

export default Answar;
