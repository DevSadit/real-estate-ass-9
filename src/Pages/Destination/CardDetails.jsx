import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
    const cardData = useLoaderData();
    const id = useParams();
    console.log(id);
    console.log(cardData.title);
    return (
        <div>
           
        </div>
    );
};

export default CardDetails;