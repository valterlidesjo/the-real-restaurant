import React from "react";
import Hero from "../assets/image 20.svg";
import Video from "../assets/12855793_3840_2160_30fps.mp4";
import pizza from "../assets/image 21.svg";
import mozzarella from "../assets/image 14.svg";
import { Link } from "react-router";
import TextSection from "../components/TextSection";
import SearchComponent from "../components/SearchComponent";
import InfiniteTextScroll from "../components/UI/InfiniteSlider";
import { InfiniteTextData } from "../components/data/InfiniteTextData";
import InfiniteSlider from "../components/UI/InfiniteSlider";

const HomePageMobile = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-8">
      <div className="w-full">
        <img
          src={Hero}
          alt="Hero Image"
          className="object-cover w-full h-[300px] mt-[1.6125rem]"
        />
      </div>

      <div className="flex flex-col p-8 gap-8">
        <TextSection
          header="OUR MENU"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          link=""
          linkText="Find out more"
        />
        <video
          src={Video}
          controls
          autoPlay
          loop
          className="object-cover h-[300px]"
        />
        <TextSection
          header="EAT GOOD LIVE GOOD"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <img src={pizza} alt="" className="object-cover h-[300px]" />
      </div>
    </div>
  );
};

export default HomePageMobile;
