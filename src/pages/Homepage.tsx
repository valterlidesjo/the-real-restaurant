import pizza from "../assets/pizza-size.png";
import SearchComponent from "../components/SearchComponent";

const Homepage = () => {

  
  return (
    <>
    <div className="w-full flex justify-center items-center flex-col">
      <img src={pizza} alt="Pizza" className="w-3/4 my-16 max-w-sm"/>
      <p className="text-2xl mb-2 sm:text-3xl">Fitzgerald Av. 5</p>
      <p className="text-2xl mb-8 sm:text-3xl">Kingston, Jamaica</p>
      <p className="text-2xl mb-2 sm:text-3xl">18.00 - 00.00</p>
      <p className="text-2xl sm:text-3xl">Every day</p>
    </div>
    <SearchComponent  />
    </>
  );
};

export default Homepage;
