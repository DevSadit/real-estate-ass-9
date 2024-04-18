import Card from "./Card";
import PropTypes from "prop-types";
const Destinations = ({ datas }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl mt-12">
          Explore Your <span className="font-bold text-[#41B06E]">Dream </span>
          Destination
        </h1>
        <p className="mt-10 text-xl">
          Embark on an unforgettable journey and explore your dream destination
          with us. Discover hidden gems, breathtaking landscapes, and vibrant
          cultures as you create lasting memories.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container mx-auto my-12">
        {datas.map((data) => (
          <Card data={data} key={data.id}></Card>
        ))}
      </div>
    </div>
  );
};

Destinations.propTypes = {
  datas: PropTypes.object,
};
export default Destinations;
