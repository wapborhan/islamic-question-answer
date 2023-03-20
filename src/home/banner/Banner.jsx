import React from "react";

const Banner = () => {
  return (
    <div className="relative text-white hadissliderone w-full md-max:h-[30rem] h-[38rem]">
      <div className="absolute h-full w-full bg-[#2b9e76] dark:bg-dark-hero-bg opacity-95"></div>
      <div className="container xss:max-w-full w-7/12 flex flex-col items-center justify-center h-full pb-8 bg-contain bg-no-repeat bg-center xss:w-11/12 xss:pt-10 xs:min-w-full xs:p-5 sm:p-0 sm:w-11/12 xs:pt-10 md:w-11/12 md:pt-10 md:px-6 lg:w-10/12 xl:w-9/12 2xl-min:w-9/12 2xl-min:py-20">
        <h1 className="font-semibold z-0 leading-[74px] mb-5 text-white dark:text-hadith-deepoffwhite xss:text-center xss:text-[28px] xss:leading-8 xs:w-11/12 xs:text-center xs:text-[26px] xs:leading-10 xs-max:mb-10 sm-max:text-[30px] sm:mt-5 md:text-[35px] md:leading-[52px] lg:mb-4 lg-min:text-[46px] xl-min:text-[46px] 2xl-min:text-[56px] 2xl-min:mt-8">
          ইসলামী প্রশ্ন, জিজ্ঞাসা ও জবাব
        </h1>
        <form className="flex justify-center w-full" action="">
          <div className="w-6/12 xss:w-full xs:w-10/12 sm:w-8/12 md:w-8/12 lg:w-7/12 2xl-min:w-6/12 relative dark:border-[#ffffff33] dark:border-[3px] dark:rounded-2xl md-max:mb-6 lg-min:my-6 search-input-home">
            <input
              className="rounded-xl pl-6 pr-36 py-5 text-black dark:text-hadith-deepoffwhite dark:bg-hadith-dark-card focus:outline-none focus:appearance-none xss:placeholder:text-sm 
    xs:placeholder:text-sm xs:pr-20 w-full placeholder: placeholder:leading-4 dark:placeholder:text-dark-text 
    dark:placeholder:opacity-70"
              type="text"
              placeholder="প্রশ্ন খুজুন "
              id="search_box"
              value=""
            />
            <div className="flex items-center justify-center gap-x-2 absolute right-1.5 sm-max:top-[.4rem] md-min:top-[.3rem]">
              <img
                className="dark:hidden"
                src="/assets/index/settings.svg"
                alt=""
              />
              <img
                className="dark:lg-min:block dark:md-max:block hidden"
                src="/assets/index/settings-dark.svg"
                alt=""
              />
              <button className="relative flex justify-center items-center gap-2 bg-hadith-button-background text-base font-medium sm-max:p-[1.1rem] sm-max:rounded-xl md-min:py-[15px] md:ml-2 md-min:rounded-r-lg md-min:rounded-l-none md-min:px-[35px] lg-min:py-[15px] ">
                <svg
                  className="fill-white"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.8174 13.9331L11.0867 10.2025C12.1034 8.95911 12.6032 7.37254 12.4829 5.77096C12.3625 4.16938 11.6312 2.67532 10.4402 1.59781C9.2492 0.520305 7.68959 -0.0582065 6.084 -0.0180617C4.47841 0.0220832 2.94966 0.677813 1.81398 1.81349C0.678301 2.94918 0.0225715 4.47792 -0.0175734 6.08351C-0.0577183 7.68911 0.520793 9.24871 1.5983 10.4397C2.67581 11.6307 4.16987 12.3621 5.77145 12.4824C7.37303 12.6027 8.9596 12.1029 10.203 11.0862L13.9336 14.8169C14.0515 14.9307 14.2094 14.9937 14.3732 14.9923C14.5371 14.9909 14.6939 14.9251 14.8097 14.8092C14.9256 14.6934 14.9913 14.5366 14.9928 14.3727C14.9942 14.2089 14.9312 14.051 14.8174 13.9331ZM6.25047 11.25C5.26157 11.25 4.29487 10.9567 3.47262 10.4073C2.65038 9.85793 2.00951 9.07703 1.63108 8.1634C1.25264 7.24977 1.15362 6.24444 1.34655 5.27453C1.53947 4.30463 2.01568 3.41371 2.71494 2.71445C3.4142 2.01519 4.30512 1.53899 5.27502 1.34606C6.24493 1.15313 7.25026 1.25215 8.16389 1.63059C9.07752 2.00903 9.85842 2.64989 10.4078 3.47213C10.9572 4.29438 11.2505 5.26108 11.2505 6.24999C11.249 7.57561 10.7217 8.84652 9.78436 9.78388C8.847 10.7212 7.5761 11.2485 6.25047 11.25Z"></path>
                </svg>
                <p className="xss:hidden xs:hidden sm:hidden md:block">
                  সার্চ করুন
                </p>
              </button>
            </div>
            <div className="absolute top-24 left-0 right-0 z-[21] md-max:hidden">
              <div className="advance-scrl bg-white w-full dark:bg-hadith-dark-card relative rounded-xl h-full -top-4 hidden shadow-md px-6 py-10 md-max:hidden">
                <div className="flex gap-4 lg-max:flex-col">
                  <div className="flex flex-col w-full">
                    <h4 className="style-Kalpurush text-base text-offgrey-text-color dark:text-hadith-deepoffwhite mb-4">
                      হাদিসের বই সিলেক্ট করুন
                    </h4>
                    <div className="w-full md-max:w-full">
                      <div className="relative">
                        <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
                          <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                            <div className=" text-sm text-black dark:text-hadith-deepoffwhite">
                              <div>
                                <img
                                  className="hidden"
                                  src="/assets/leftbar/fill/hover/book.svg"
                                  alt=""
                                />
                                <p className="style-Kalpurush">সকল বই</p>
                              </div>
                            </div>
                            <img
                              className="dark:hidden"
                              src="/assets/sidebar/downarrow.svg"
                              alt=""
                            />
                            <img
                              className="dark:block hidden"
                              src="/assets/sidebar/downarrow-dark.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10">
                          <div className="cursor-pointer text-[15px] flex flex-col px-2 pb-14 drop-scrl h-[calc(30vh)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <h4 className="style-Kalpurush text-base text-offgrey-text-color dark:text-hadith-deepoffwhite mb-4">
                      হাদিসের অধ্যায় সিলেক্ট করুন
                    </h4>
                    <div className="w-full lg-min:block ">
                      <div className="relative">
                        <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
                          <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                            <div className=" text-sm text-black dark:text-hadith-deepoffwhite">
                              <div>
                                <img
                                  className="hidden"
                                  src="/assets/leftbar/fill/hover/book.svg"
                                  alt=""
                                />
                                <p className="style-Kalpurush">সকল অধ্যায়</p>
                              </div>
                            </div>
                            <img
                              className="dark:hidden"
                              src="/assets/sidebar/downarrow.svg"
                              alt=""
                            />
                            <img
                              className="dark:block hidden"
                              src="/assets/sidebar/downarrow-dark.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10">
                          <div className="cursor-pointer text-[15px] flex flex-col px-2 pb-14 drop-scrl min-h-fit max-h-[calc(30vh)]">
                            <div className="style-Kalpurush-webKit hover:bg-[#F8F8F9] dark:hover:bg-hadith-dark-card text-offgrey-text-color dark:text-hadith-deepoffwhite px-4 py-2 rounded-md">
                              প্রথমে বই সিলেক্ট করুন
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-4 md-max:flex-row md-max:my-8 md-max:gap-5 md-max:w-full">
                  <div className="text-sm text-offgrey-text-color dark:text-hadith-deepoffwhite">
                    <div className=" flex text-sm py-1 justify-between text-title dark:text-hadith-deepoffwhite cursor-pointer">
                      <div className="flex items-center gap-x-4 w-full">
                        <span className="w-4 h-4 basis-4  flex items-center justify-center rounded-md border-[2px] dark:border-[#585858] transition duration-150 delay-75"></span>
                        <p className="style-Kalpurush">আংশিক মিল</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-offgrey-text-color dark:text-hadith-deepoffwhite">
                    <div className=" flex text-sm py-1 justify-between text-title dark:text-hadith-deepoffwhite cursor-pointer">
                      <div className="flex items-center gap-x-4 w-full">
                        <span className="w-4 h-4 basis-4  flex items-center justify-center rounded-md border-[2px] dark:border-[#585858] transition duration-150 delay-75"></span>
                        <p className="style-Kalpurush">হুবুহু মিল</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end gap-x-4 md-max:justify-start md-max:w-full">
                  <button
                    type="button"
                    className="py-1.5 px-5 rounded-md bg-[#e2e2e2] dark:bg-[#383838] md-max:py-3 md-max:w-full font-medium text-sm leading-5 text-offgrey-text-color dark:text-white"
                  >
                    বাতিল
                  </button>
                  <button
                    type="submit"
                    className="py-1.5 px-5 rounded-md bg-hadith-button-background md-max:py-3 md-max:w-full font-medium text-sm leading-5 text-white"
                  >
                    সার্চ করুন
                  </button>
                </div>
              </div>
            </div>
          </div>
          <main
            className="fixed md-max:flex md-max:items-center md-max:justify-center overflow-hidden z-[51] bg-black bg-opacity-50 inset-0 transform lg-min:hidden 
      transition-all delay-500 opacity-0 
          -translate-y-full"
          >
            <section className="w-full md:w-8/12 top-0 p-4 absolute h-fit  delay-400 duration-500 transform -translate-y-full">
              <article className="bg-white px-5 pt-6 pb-2 dark:bg-hadith-dark-card rounded-xl relative w-full flex flex-col h-full search-input-mbl">
                <input
                  className="rounded-xl pl-6 pr-36 py-5 text-black bg-gray-100 dark:bg-darkchapter-list-hover dark:text-hadith-deepoffwhite md-max:py-3  focus:outline-none focus:appearance-none xss:placeholder:text-sm 
    xs:placeholder:text-sm xs:pr-20 w-full placeholder: placeholder:leading-4 dark:placeholder:text-dark-text 
    dark:placeholder:opacity-70"
                  type="text"
                  placeholder="Search Hadith"
                  id="search_box"
                  value=""
                />
                <div className="h-10"></div>
                <div className="advance-scrl bg-white w-full dark:bg-hadith-dark-card relative rounded-xl h-full -top-4 block ">
                  <div className="flex gap-4 lg-max:flex-col">
                    <div className="flex flex-col w-full">
                      <h4 className="style-Kalpurush text-base text-offgrey-text-color dark:text-hadith-deepoffwhite mb-4">
                        হাদিসের বই সিলেক্ট করুন
                      </h4>
                      <div className="w-full md-max:w-full">
                        <div className="relative">
                          <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
                            <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                              <div className=" text-sm text-black dark:text-hadith-deepoffwhite">
                                <div>
                                  <img
                                    className="hidden"
                                    src="/assets/leftbar/fill/hover/book.svg"
                                    alt=""
                                  />
                                  <p className="style-Kalpurush">সকল বই</p>
                                </div>
                              </div>
                              <img
                                className="dark:hidden"
                                src="/assets/sidebar/downarrow.svg"
                                alt=""
                              />
                              <img
                                className="dark:block hidden"
                                src="/assets/sidebar/downarrow-dark.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10">
                            <div className="cursor-pointer text-[15px] flex flex-col px-2 pb-14 drop-scrl h-[calc(30vh)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <h4 className="style-Kalpurush text-base text-offgrey-text-color dark:text-hadith-deepoffwhite mb-4">
                        হাদিসের অধ্যায় সিলেক্ট করুন
                      </h4>
                      <div className="w-full lg-min:block ">
                        <div className="relative">
                          <div className="w-full h-12 border border-solid border-[#ECEEF0] dark:border-transparent dark:bg-darkchapter-list-hover rounded-lg">
                            <div className="px-4 py-3 flex items-center justify-between cursor-pointer">
                              <div className=" text-sm text-black dark:text-hadith-deepoffwhite">
                                <div>
                                  <img
                                    className="hidden"
                                    src="/assets/leftbar/fill/hover/book.svg"
                                    alt=""
                                  />
                                  <p className="style-Kalpurush">সকল অধ্যায়</p>
                                </div>
                              </div>
                              <img
                                className="dark:hidden"
                                src="/assets/sidebar/downarrow.svg"
                                alt=""
                              />
                              <img
                                className="dark:block hidden"
                                src="/assets/sidebar/downarrow-dark.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="hidden absolute  bg-white dark:bg-darkchapter-list-hover rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10">
                            <div className="cursor-pointer text-[15px] flex flex-col px-2 pb-14 drop-scrl min-h-fit max-h-[calc(30vh)]">
                              <div className="style-Kalpurush-webKit hover:bg-[#F8F8F9] dark:hover:bg-hadith-dark-card text-offgrey-text-color dark:text-hadith-deepoffwhite px-4 py-2 rounded-md">
                                প্রথমে বই সিলেক্ট করুন
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 mt-4 md-max:flex-row md-max:my-8 md-max:gap-5 md-max:w-full">
                    <div className="text-sm text-offgrey-text-color dark:text-hadith-deepoffwhite">
                      <div className=" flex text-sm py-1 justify-between text-title dark:text-hadith-deepoffwhite cursor-pointer">
                        <div className="flex items-center gap-x-4 w-full">
                          <span className="w-4 h-4 basis-4  flex items-center justify-center rounded-md border-[2px] dark:border-[#585858] transition duration-150 delay-75"></span>
                          <p className="style-Kalpurush">আংশিক মিল</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-offgrey-text-color dark:text-hadith-deepoffwhite">
                      <div className=" flex text-sm py-1 justify-between text-title dark:text-hadith-deepoffwhite cursor-pointer">
                        <div className="flex items-center gap-x-4 w-full">
                          <span className="w-4 h-4 basis-4  flex items-center justify-center rounded-md border-[2px] dark:border-[#585858] transition duration-150 delay-75"></span>
                          <p className="style-Kalpurush">হুবুহু মিল</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-x-4 md-max:justify-start md-max:w-full">
                    <button
                      type="button"
                      className="py-1.5 px-5 rounded-md bg-[#e2e2e2] dark:bg-[#383838] md-max:py-3 md-max:w-full font-medium text-sm leading-5 text-offgrey-text-color dark:text-white"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      className="py-1.5 px-5 rounded-md bg-hadith-button-background md-max:py-3 md-max:w-full font-medium text-sm leading-5 text-white"
                    >
                      সার্চ করুন
                    </button>
                  </div>
                </div>
              </article>
            </section>
            <section className=" w-screen h-full cursor-pointer "></section>
          </main>
        </form>
        {/* <div className="w-full h-64 lg-min:h-48 text-center text-white sm:mb-5 xs:w-10/12 sm:w-9/12 md:w-9/12 lg:w-9/12 lg:py-3 xl:w-7/12 2xl-min:w-6/12">
          <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
            <div
              className="swiper-wrapper"
              // style="transition-duration: 0ms; transform: translate3d(-1162px, 0px, 0px);"
            >
              <div
                className="swiper-slide"
                //  style="width: 581px;"
              >
                <div>
                  <div className="webkit cursor-pointer mt-7 dark:text-hadith-deepoffwhite font-medium opacity-90 leading-7 xss:mt-2 xs:mt-2 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl xl-min:leading-10">
                    আমি রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম)-কে বলতে শুনেছি
                    ‘আল্লাহর নিকট ছবি মূর্তি অংকনকারীর সবচেয়ে কঠিন শাস্তি হবে’
                    (বুখারী ৮৮০ পৃঃ, মিশকাত হা/৪৪৯৭)।
                  </div>
                  <div className="mt-8 mb-16 xs-max:mt-14 dark:text-hadith-deepoffwhite xs-max:mb-14 font-medium opacity-90 leading-7 xss:mt-2 xs:mt-6 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl">
                    [ঊপদেশ: <span>১১৩</span>]
                  </div>
                </div> 
              </div>
              {/* <div
                className="swiper-slide swiper-slide-prev"
                // style="width: 581px;"
              >
                <div>
                  <div className="webkit cursor-pointer mt-7 dark:text-hadith-deepoffwhite font-medium opacity-90 leading-7 xss:mt-2 xs:mt-2 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl xl-min:leading-10">
                    আমি রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম)-এর সাথে বায়’আত
                    বা শপথ করেছি ছালাত প্রতিষ্ঠা করার, যাকাত প্রদান করার এবং সকল
                    মুসলমানের কল্যাণ কামনা করার (বুখারী হা/৫৭, ৫২৪; মুসলিম
                    হা/৫৬)।
                  </div>
                  <div className="mt-8 mb-16 xs-max:mt-14 dark:text-hadith-deepoffwhite xs-max:mb-14 font-medium opacity-90 leading-7 xss:mt-2 xs:mt-6 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl">
                    [ঊপদেশ: <span>২</span>]
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-active"
                // style="width: 581px;"
              >
                <div>
                  <div className="webkit cursor-pointer mt-7 dark:text-hadith-deepoffwhite font-medium opacity-90 leading-7 xss:mt-2 xs:mt-2 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl xl-min:leading-10">
                    নবী করীম (সাল্লাল্লাহু ‘আলায়হি ওয়া সাল্লাম) বলেছেন, “যে
                    ব্যক্তি আমার ন্যায় এরূপ অযু করে একাগ্র চিত্তে দু’রাকআত নামায
                    পড়বে, তার পূর্বের সকল গোনাহ মাফ করে দেওয়া হবে।’’ (বুখারী
                    ১৫৯, মুসলিম ৫৩৯)
                  </div>
                  <div className="mt-8 mb-16 xs-max:mt-14 dark:text-hadith-deepoffwhite xs-max:mb-14 font-medium opacity-90 leading-7 xss:mt-2 xs:mt-6 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl">
                    [১০০ সুসাব্যস্ত হাদিস: <span>১০</span>]
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                // style="width: 581px;"
              >
                <div>
                  <div className="webkit cursor-pointer mt-7 dark:text-hadith-deepoffwhite font-medium opacity-90 leading-7 xss:mt-2 xs:mt-2 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl xl-min:leading-10">
                    রাসূলুল্লাহ্ (সাঃ) বলেছেন : কোন কিছুকে অশুভ মনে করা
                    শির্&zwnj;ক। (আহমাদ হা/৩৬৮৭, শায়খ আলবানী ও ইবনু হিব্বাস একে
                    সহীহ বলেছেন)
                  </div>
                  <div className="mt-8 mb-16 xs-max:mt-14 dark:text-hadith-deepoffwhite xs-max:mb-14 font-medium opacity-90 leading-7 xss:mt-2 xs:mt-6 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl">
                    [সহিহ ফাযায়েলে আমল: <span>৭</span>]
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                // style="width: 581px;"
              >
                <div>
                  <div className="webkit cursor-pointer mt-7 dark:text-hadith-deepoffwhite font-medium opacity-90 leading-7 xss:mt-2 xs:mt-2 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl xl-min:leading-10">
                    রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম) বলেছেন, ‘আমি যাকে
                    ভাতা দিয়ে কোন কাজের দায়িত্ব প্রদান করেছি সে যদি ভাতা ব্যতীত
                    অন্য কিছু গ্রহণ করে তাহলে তা হবে খিয়ানাত’ (আবূদাঊদ, মিশকাত
                    হা/৩৭৪৮)।
                  </div>
                  <div className="mt-8 mb-16 xs-max:mt-14 dark:text-hadith-deepoffwhite xs-max:mb-14 font-medium opacity-90 leading-7 xss:mt-2 xs:mt-6 sm:text-lg md:text-lg lg:text-lg xl-min:text-xl">
                    [ঊপদেশ: <span>১৩৪</span>]
                  </div>
                </div>
              </div> 
            </div>
            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
