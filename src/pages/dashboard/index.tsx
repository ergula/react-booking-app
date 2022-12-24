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
import StoreCard from "./components/StoreCard";
import InfoCard from "./components/InfoCard";
import BlogCard from "./components/BlogCard";
import BlogCardContainer from "./components/BlogCardContainer";

const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <SectionMain>
        <SectionTitle main title="Dashboard"></SectionTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-4">
          {/* Info Card */}
          <InfoCard 
          title="What is Lorem Ipsum"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          icon={image1}
          />
          <InfoCard 
          title= "Why do we use it?"
          content="It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout."
          icon={image1}
          />
        </div>
        {/* Applicaitons Store Card */}
        <StoreCard 
        title="Booking App"
        subTitle="Booking App on iOS & Android. Download the app today."
        />
        {/* Blog Cards */}
        <BlogCardContainer>
          <BlogCard icon={image3}/>
          <BlogCard icon={image4}/>
          <BlogCard icon={image5}/>
        </BlogCardContainer>
        
      </SectionMain>
    </>
  );
};

export default Dashboard;
