
import { useLoaderData } from 'react-router-dom';
import DonateCard from './DonateCard';

const MainDonate = () => {
    const DonateData = useLoaderData();
    
    return (
        <div className='max-w-screen-2xl container mx-auto my-10'>
            <div className='max-w-screen-2xl container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
                {DonateData?.map(item => <DonateCard key={item.id} donateItem={item} />)}
            </div>
        </div>
    );
};

export default MainDonate;
