import { useLoaderData } from "react-router-dom";
import Slider from "../Banner/Slider";
import Destinations from "../Destination/Destinations";
import Head from "../../Layout/Head";

const Home = () => {
  const datas = useLoaderData();
  return (
    <div>
      <Head title="Home" />
      <div>
        <Slider></Slider>
        <Destinations datas={datas} key={datas.id}></Destinations>
      </div>
    </div>
  );
};

export default Home;
