import { Link } from "react-router-dom";


const Error = () => {
    return (
        <>
           <div className='flex flex-col gap-20 justify-center items-center min-h-screen'>
            <h1 className='font-extrabold text-xl lg:text-7xl text-red-400'>404 Error! This Page Not Found </h1>
          <Link to="/">
          <button className="w-full px-5 hover:scale-110 scale-100 transition-all duration-300 py-2 mt-6 text-xl tracking-wider text-white uppercase  transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Go Home</button>
          </Link>
        </div>   
        </>
    );
};

export default Error;