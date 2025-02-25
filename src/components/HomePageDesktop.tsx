import Hero from "../assets/image 20.svg";
import Video from "../assets/12855793_3840_2160_30fps.mp4";
import pizza from "../assets/image 21.svg";
import mozzarella from "../assets/image 14.svg";
import TextSection from "./TextSection";
import InfiniteSlider from "./UI/InfiniteSlider";
import { InfiniteTextDataDesktop } from "./data/InfiniteTextData";

const HomePageDesktop = () => {
  return (
    <>
      <section className="flex flex-col mb-16 gap-16">
        <div className="w-full">
          <img
            src={Hero}
            alt="Hero Image"
            className="object-cover w-full h-[500px] mt-[1.6125rem]"
          />
        </div>
        <InfiniteSlider text={InfiniteTextDataDesktop} />
        <div className="flex w-full">
          <img src={pizza} alt="" className="object-cover w-[50%] h-[500px]" />
          <div className="w-[50%] box-border p-8">
            <TextSection
              header="OUR MENU"
              text="Indulge in a refined culinary experience where classic Italian flavors meet exquisite craftsmanship. From delicate antipasti to handcrafted pasta and artisanal pizzas, our menu is designed to delight the senses with every bite."
              link="menu"
              linkText="Find out more"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[50%] box-border p-8">
            <TextSection
              header="EAT GOOD LIVE GOOD"
              text="Great food is at the heart of a well-lived life, bringing people together over moments of joy and indulgence. With the finest ingredients and timeless flavors, we craft dishes that turn every meal into an experience worth savoring."
            />
          </div>
          <div className="flex flex-col w-[50%] gap-8">
            <video
              src={Video}
              controls
              autoPlay
              loop
              muted
              className="object-cover h-[250px]"
            />
            <img src={mozzarella} alt="" className="object-cover h-[250px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageDesktop;
