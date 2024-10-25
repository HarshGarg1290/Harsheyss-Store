import React from "react";
import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
import { FaCarSide, FaWallet } from "react-icons/fa6";

const serviceData = [
	{
		id: 1,
		icon: (
			<FaCarSide className="text-4xl md:text-5xl text-primary dark:text-white" />
		),
		title: "Free Shipping",
		description: "Free Shipping on All Orders",
	},
	{
		id: 2,
		icon: (
			<FaCheckCircle className="text-4xl md:text-5xl text-primary dark:text-white" />
		),
		title: "Safe Money",
		description: "30 Days Money Back",
	},
	{
		id: 3,
		icon: (
			<FaWallet className="text-4xl md:text-5xl text-primary dark:text-white" />
		),
		title: "Secure Payment",
		description: "All payments are Secure",
	},
	{
		id: 4,
		icon: (
			<FaHeadphonesAlt className="text-4xl md:text-5xl text-primary dark:text-white" />
		),
		title: "Online Support ",
		description: "We are at your service 24/7",
	},
];

const Services = () => {
	return (
		<div>
			<div className="container my-14 md:my-20 ">
				<div
					className="grid grid-cols-2 lg:grid-cols-4 gap-24
                gap-y-8"
				>
					{serviceData.map((data) => (
						<div className="flex flex-col items-start sm:flex-row gap-4 ">
							{data.icon}
							<div>
								<h1 className="lg:text-2xl font-bold">{data.title}</h1>
								<h1 className="text-gray-400 text-xl">{data.description}</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
