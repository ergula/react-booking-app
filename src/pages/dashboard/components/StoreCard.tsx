import React, { ReactNode } from "react";

import apple from "../../../assets/images/appleButton.svg";
import playStore from "../../../assets/images/playButton.svg";

type Props = {
  title: string
  subTitle: string
  children?: ReactNode
};

export default function StoreCard({ title, subTitle, children }: Props) {
  return (
    <div className="w-full  text-center bg-white rounded-lg  sm:p-8">
      {/* Store Card Title */}
      <h5 className="mb-4 text-3xl font-bold text-gray-900 text-darkBlue">
        {title}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg">{subTitle}</p>
      {/* Store Download Buttons */}
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="w-full sm:w-auto bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
        >
          <img className="mr-3 w-7 h-7" src={apple} />
          <div className="text-left">
            <div className="mb-1 text-xs">Download on the</div>
            <div className="-mt-1  text-sm font-semibold">Mac App Store</div>
          </div>
        </a>
        <a
          href="#"
          className="w-full sm:w-auto bg-gray-800  bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
        >
          <img className="mr-3 w-7 h-7" src={playStore} />
          <div className="text-left">
            <div className="mb-1 text-xs">Get in on</div>
            <div className="-mt-1 text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  );
}
