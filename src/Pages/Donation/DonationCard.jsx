/* eslint-disable react/prop-types */
const DonationCard = ({dataDonation}) => {
    const { title, category, price,  image, backgroundColor, textColor, categoryColor } = dataDonation || {};
    return (
        <div>
         <div style={{ backgroundColor: backgroundColor}} className=" w-80  hover:scale-110 scale-100 transition-all duration-300  rounded-xl   text-gray-700 shadow-sm">
<div className="flex flex-col shadow-md p-4  rounded-xl">
<div className="flex justify-center items-center ">
    <img src={image} className="h-40 hover:scale-110 scale-100 transition-all duration-300" alt="" />
    </div>
<div className="p-2 flex flex-col gap-2 mt-3">
<section style={{color: textColor,display: "inline",backgroundColor: categoryColor,}} className=" text-lg text-center p-2 rounded-lg  w-28 font-semibold">{category}</section>
<h2 style={{color: textColor,}} className="text-lg font-semibold text-center">{title}</h2>
<p className="text-lg font-semibold text-center">Donated: {price}$</p>
</div>
</div>
</div>
        </div>
    );
};

export default DonationCard;