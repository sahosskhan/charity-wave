import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const MyDonationMain = () => {
    const [donationData, setDonationData] = useState([]);
    const [notFound, setNotfound] = useState(false);
    const [isShow,setIsShow] = useState(false)
  
    useEffect(() => {
      const myDonationItems = JSON.parse(localStorage.getItem("MyDonation"));
  
      if (myDonationItems) {
        setDonationData(myDonationItems);
  
  
      } else {
        setNotfound("No Donation Found, Pleas Donate First");
      }
    }, []);
    return (
        <div className="max-w-screen-2xl container mx-auto my-10 flex justify-center items-center">
              {notFound ? (
        <p className="h-[80vh] flex justify-center text-2xl items-center">😥{notFound}</p>
      ) : (
        <div>
   

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {
                isShow ? donationData.map((items) => (
                    <DonationCard key={items.id} dataDonation={items}/>
                  )) 
                  
                  : donationData.slice(0,4).map((items) => (
                    <DonationCard key={items.id} dataDonation={items}/>
                  ))
            }
          </div>

          {donationData.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-blue-500 block mt-20 btn rounded-lg text-white hover:bg-gray-700 transition-colors duration-700 font-medium text-lg mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
        </div>
      )} 
        </div>
    );
};

export default MyDonationMain;