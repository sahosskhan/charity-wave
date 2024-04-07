/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';

const SingleDonateDetails = ({ DonateDetails }) => {
    const { id, title, price, background, description, categoryColor } = DonateDetails || {};

    const handleMyDonation = () => {
        const myDonatedArray = [];
    
        const myDonationItems = JSON.parse(localStorage.getItem("MyDonation")) || [];
    
        if (!myDonationItems.length) {
            myDonatedArray.push(DonateDetails);
            localStorage.setItem("MyDonation", JSON.stringify(myDonatedArray));
            Swal.fire("Good job!", "🥰 You Donated for Happiness!", "success");
        } else {
            const isExists = myDonationItems.find((item) => item.id === id);
    
            if (!isExists) {
                myDonatedArray.push(...myDonationItems, DonateDetails);
                localStorage.setItem("MyDonation", JSON.stringify(myDonatedArray));
                Swal.fire("Good job!", "🥰 You Donated for Happiness!", "success");
            } else {
                Swal.fire("Oops!", "🫡 You already donated!", "error");
            }
        }
    };
    

    return (
        <div className="max-w-screen-2xl container mx-auto p-5">
            <div className="lg:flex">
                <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-semibold text-gray-800 lg:text-4xl">{title}</h2>
                        <p className="mt-4 text-base text-gray-500 lg:text-base">{description}</p>
                        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <button onClick={handleMyDonation} style={{
                backgroundColor:categoryColor,
            }} className="block px-6 py-3 text-lg font-medium tracking-wider text-center text-black    rounded-md ">Donate {price}$</button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 lg:w-1/2 lg:h-auto rounded-xl">
                    <div className="w-full h-full rounded-xl bg-cover" style={{ backgroundImage: `url(${background})` }}>
                        <div className="w-full h-full bg-black opacity-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDonateDetails;
