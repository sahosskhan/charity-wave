import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
<div className="container px-6 py-16 mx-auto">
  <div className="items-center lg:flex">
    <div className="w-full lg:w-1/2">
      <div className="lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best platform to choose <br /> your <span className="text-blue-500 ">donation</span></h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">A donation is a gift for charity, humanitarian aid, or to benefit a cause. A donation may take various forms, including money, alms, services, or goods such as clothing, toys, food, or vehicles.</p>
<Link to="/donate-some-love">
<button className="w-full px-5 hover:scale-110 scale-100 transition-all duration-300 py-2 mt-6 text-lg tracking-wider text-white uppercase  transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Donate Now</button>
</Link>
      </div>
    </div>
    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
      <img className="w-[700px] h-[600px] lg:max-w-3xl" src="https://i.ibb.co/PZj2xy0/image.png" />
    </div>
  </div>
</div>

        </div>
    );
};

export default Header;