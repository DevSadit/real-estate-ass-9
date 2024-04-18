import { CiStar } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cardDatas = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const singleCard = cardDatas.find((cardData) => cardData.id === intId);

  const {
    rating,
    title,
    segment_name,
    description,
    price,
    status,
    location,
    facilities,
    image,
    area,
  } = singleCard;
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-x-6 mt-4 bg-[#C8E6C9] p-3 rounded-lg mb-5">
      <div className="rounded-lg ">
        <img src={image} className=" rounded-lg" />
      </div>
      <div className="md:space-y-6">
        <h1 className="font-bold text-4xl">{title}</h1>
        <hr />
        <h3 className="font-bold text-2xl">
          <span className="text-[#41B06E]">Segment:</span> {segment_name}
        </h3>
        <p className="font-medium text-base">{description}</p>
        <hr />
        <div className="flex gap-x-4 items-center my-4 md:my-0">
          <p className="font-bold">Tag</p>
          <div className="flex gap-x-4">
            {facilities.map((facility, i) => (
              <h5
                className="text-[#23BE0A] font-medium bg-[#23BE0D0D] rounded-full px-4 py-2 text-center "
                key={i}
              >
                {facility}
              </h5>
            ))}
          </div>
        </div>
        <hr />
        <div className="space-y-3">
          {/* ratting and location */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <CiStar className="text-3xl text-[#FFC94A] font-black" />
              <p className="text-2xl font-black">{rating}</p>
            </div>
            <div className="flex gap-x-2 items-center ">
              <FaMapMarkerAlt className="text-3xl text-[#41B06E] font-black" />
              <p className="text-xl font-black">{location}</p>
            </div>
          </div>
          {/* status, area & price */}
          <div className="flex md:flex-row flex-col  md:justify-between md:items-center justify-start gap-y-3 md:gap-y-0 ">
            <div className="flex gap-x-2 items-center">
              <p className="text-xl font-black">Status:</p>
              <p className="text-xl font-bold">{status}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="text-xl font-black">Area:</p>
              <p className="text-xl font-bold">{area}</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <p className="text-xl font-black">Price:</p>
              <p className="text-xl font-bold">{price}</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <button className="btn btn-warning mt-2 md:mt-0">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
