import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DonateCard from './DonateCard';

const MainDonate = () => {
    const DonateData = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected category
    const [searchText, setSearchText] = useState(""); // State to store search text

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value); // Update selected category
    };

    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value); // Update search text
    };

    // Filter data based on selected category, or show all if "All" is selected
    let filteredData = selectedCategory ? DonateData.filter(item => item.category === selectedCategory) : DonateData;

    // Filter data based on search text if provided
    if (searchText) {
        filteredData = filteredData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    return (
        <div className='max-w-screen-2xl container mx-auto  my-10 '>
            <div className='flex lg:flex-row flex-col gap-5 justify-between items-center p-6 my-10 rounded-lg bg-blue-200'>
       <div className='flex px-3 gap-5'>
       <label className='text-2xl'><i className="fa-solid fa-filter"></i> Filter</label>
                <select className='text-2xl rounded-lg px-1' name="" id="" onChange={handleCategoryChange} value={selectedCategory}>
                <option selected disabled value="">Filter By Category</option>
                    <option value="">All</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Food">Food</option>
                    <option value="Clothing">Clothing</option>
                </select>
       </div>

                <div className="flex lg:flex-row flex-col justify-between items-center   gap-2 ">
                    <input type="text" className="text-2xl rounded-lg p-2 h-10" placeholder="Search by title" value={searchText} onChange={handleSearchInputChange} />
                    <button className="text-2xl h-10 bg-blue-500 text-white px-4 py- rounded-md ml-2">Search</button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 gap-20'>
                    {filteredData.map(item => <DonateCard key={item.id} donateItem={item} />)}
                </div>
            </div>
        </div>
    );
};

export default MainDonate;
