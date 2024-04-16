import { CiStar } from "react-icons/ci";
import PropTypes from "prop-types";
const Card = ({ data }) => {
  const {
    id,
    rating, 
    title,
    segment_name,
    description,
    price,
    status,
    location,
    facilities,
    image,
  } = data;
  return (
    <div className="card bg-base-100 border border-[#13131326] p-4 ">
      <div className="">
        <img src={image} className="rounded-xl mx-auto" />
      </div>

      <div className="md:space-y-4 mt-3">
        <div className="flex gap-x-3 justify-center">
          {facilities.map((facility, i) => (
            <h4
              key={i}
              className="text-white text-center font-medium rounded-lg bg-[#FFC94A]  p-2"
            >
              {facility}
            </h4>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{segment_name}</h2>
        <p className="md:h-24 h-20">{description}</p>
        <hr className="border-dashed h-[1px] bg-[#13131326] my-3" />
        <div className="flex gap-x-3 justify-between">
          <p className="font-medium text-[#41B06E] bg-none border border-[#41B06E] hover:bg-[#92f19d] rounded-full px-8 py-2">
            {price}
          </p>
          <div className="flex items-center gap-x-2">
            <p>{rating}</p>
            <CiStar />
          </div>
        </div>
        <div>
          <button className="text-white hover:bg-[#286d44] w-full font-bold text-xl text-center rounded-lg bg-[#41B06E] py-3">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};


Card.propTypes = {
  data: PropTypes.object,
};
export default Card;
