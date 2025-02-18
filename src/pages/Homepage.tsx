import React from "react";
import Hero from "../assets/image 20.svg";
import Video from "../assets/12855793_3840_2160_30fps.mp4";
import pizza from "../assets/image 21.svg";
import mozzarella from "../assets/image 14.svg";
import { Link } from "react-router";
import TextSection from "../components/TextSection";

const Homepage = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-full">
          <img
            src={Hero}
            alt="Hero Image"
            className="object-fit w-full h-full"
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
          <div className="flex flex-col gap-8">
            <img src={pizza} />
            <video src={Video} controls autoPlay loop />
            <img src={mozzarella} />
          </div>
          <TextSection
            header="EAT GOOD LIVE GOOD"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
