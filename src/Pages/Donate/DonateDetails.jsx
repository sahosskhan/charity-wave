import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import SingleDonateDetails from "./SingleDonateDetails";
const DonateDetails = () => {
    const [DonateDetails, setDonateDetails] = useState({});
    const { id } = useParams();
    const singleDonate = useLoaderData();
    useEffect(() => {
      const findDonate = singleDonate?.find((items) => items.id === id);
      setDonateDetails(findDonate);
    }, [id, singleDonate]);
    return (
        <div className="max-w-screen-2xl container mx-auto">
          <SingleDonateDetails DonateDetails={DonateDetails} />  
        </div>
    );
};

export default DonateDetails;