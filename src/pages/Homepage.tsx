import React from "react";

import useIsDesktop from "../functions/UseIsDesktop";
import HomePageDesktop from "../components/HomePageDesktop";
import HomePageMobile from "../components/HomePageMobile";
import SearchComponent from "../components/SearchComponent";

const Homepage = () => {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? <HomePageDesktop /> : <HomePageMobile />}
      <div className="p-8 md:p-0">
        <SearchComponent />
      </div>
    </>
  );
};

export default Homepage;
