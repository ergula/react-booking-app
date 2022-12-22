import NavigationBar from "../../components/menu";
import SectionMain from "./components/SectionMain";
import SectionTitle from "./components/SectionTitle";

import image1 from "../../assets/images/hotel1.jpg";
import image2 from "../../assets/images/hotel2.jpg";
import image3 from "../../assets/images/hotel3.jpg";
import image4 from "../../assets/images/hotel4.jpg";
import image5 from "../../assets/images/hotel5.jpg";

import apple from "../../assets/images/appleButton.svg";
import playStore from "../../assets/images/playButton.svg";

const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <SectionMain>
        <SectionTitle main title="Dashboard"></SectionTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-4">
          <a
            href="#"
            className="flex flex-col items-center bg-white rounded-lg shadow-md shadow-darkBlue md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={image1}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                What is Lorem Ipsum?
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col items-center bg-white shadow-darkBlue rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
              src={image2}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Why do we use it?
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </a>
        </div>
        <div className="w-full  text-center bg-white rounded-lg shadow-md shadow-darkBlue sm:p-8">
          <h5 className="mb-4 text-3xl font-bold text-gray-900 text-darkBlue">
            Booking App
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Booking App on iOS & Android. Download the app today.
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <img className="mr-3 w-7 h-7" src={apple} />
              <div className="text-left">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Mac App Store
                </div>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <img className="mr-3 w-7 h-7" src={playStore} />
              <div className="text-left">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Google Play
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mt-4">
        <div className="max-w-sm bg-white  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={image3}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                Lorem
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow-md ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={image5}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                Lorem
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={image4}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                Lorem
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
          </div>
        </div>
        </div>
      </SectionMain>
    </>
  );
};

export default Dashboard;
