import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified on Products
          </h1>
          <div className="flex flex-col-3">
            <div className="w-full">
              <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 rounded-full text-slate-950"
              />
            </div>
            <div data-aos="fade-up">
            <button className="btn btn-primary border-2 rounded-full ml-2 p-3 bg-yellow-600 hover:bg-sky-700 ">subscribe</button>
            </div>
          </div>
          {/* <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 rounded-full text-slate-950"
          /> */}
          
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
