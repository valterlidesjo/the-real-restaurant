import React from "react";
import Hero from "../assets/image 20.svg";
import Video from "../assets/12855793_3840_2160_30fps.mp4";
import pizza from "../assets/image 21.svg";
import mozzarella from "../assets/image 14.svg";
import { Link } from "react-router";
import TextSection from "../components/TextSection";
import { InfiniteTextDataMobile } from "./data/InfiniteTextData";
import InfiniteSlider from "./UI/InfiniteSlider";

const HomePageMobile = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-8">
        <div className="w-full">
          <img
            src={Hero}
            alt="Hero Image"
            className="object-cover w-full h-[300px] mt-[1.6125rem]"
          />
        </div>
        <InfiniteSlider text={InfiniteTextDataMobile} />
        <div className="flex flex-col px-8 gap-8">
          <TextSection
            header="OUR MENU"
            text="Indulge in a refined culinary experience where classic Italian flavors meet exquisite craftsmanship. From delicate antipasti to handcrafted pasta and artisanal pizzas, our menu is designed to delight the senses with every bite."
            link="menu"
            linkText="Find out more"
          />
          <video
            src={Video}
            controls
            autoPlay
            loop
            muted
            className="object-cover h-[300px]"
          />
          <TextSection
            header="EAT GOOD LIVE GOOD"
            text="Great food is at the heart of a well-lived life, bringing people together over moments of joy and indulgence. With the finest ingredients and timeless flavors, we craft dishes that turn every meal into an experience worth savoring."
          />
          <img src={pizza} alt="" className="object-cover h-[300px]" />
        </div>
      </section>
    </>
  );
};

export default HomePageMobile;
