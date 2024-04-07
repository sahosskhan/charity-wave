

const Stats = () => {
    return (
<>
<div className="max-w-7xl mx-auto text-center mt-10">
            <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 dark:text-white ">Our <span className="text-blue-500">Successful</span> Achievement & Completion</h1>
        </div>
<div className="flex items-center justify-center p-10 ">

<section className="p-6 my-6  text-gray-100">
	<div className="container grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		
		<div className="flex p-4 space-x-4 hover:scale-110 scale-100 transition-all duration-300 rounded-lg md:space-x-6 bg-blue-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-blue-400">
			<i className="fa-solid fa-hand-holding-dollar"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading">10 Million+</p>
				<p className="capitalize text-lg">Per Day Donation</p>
			</div>
		</div>

		<div className="flex p-4 space-x-4 hover:scale-110 scale-100 transition-all duration-300 rounded-lg md:space-x-6 bg-blue-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-blue-400">
            <i className="fa-regular fa-face-smile"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading">800 Million+</p>
				<p className="capitalize text-lg">Donation Collect</p>
			</div>
		</div>

        <div className="flex p-4 space-x-4 hover:scale-110 scale-100 transition-all duration-300 rounded-lg md:space-x-6 bg-blue-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-blue-400">
            <i className="fa-solid fa-person-running"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading">12+ Campaign</p>
				<p className="capitalize text-lg">Running Successful</p>
			</div>
		</div>

        <div className="flex p-4 space-x-4 hover:scale-110 scale-100 transition-all duration-300 rounded-lg md:space-x-6 bg-blue-100 text-black">
			<div className="flex justify-center text-5xl p-4 items-center rounded-lg bg-blue-400">
            <i className="fa-solid fa-handshake-angle"></i>
			</div>
			<div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading">130+ Brands</p>
				<p className="capitalize text-lg">Sponsor Partners</p>
			</div>
		</div>
	

	</div>
</section>


</div>
</>
    );
};

export default Stats;