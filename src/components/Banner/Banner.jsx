import React from "react";
import Slider from "react-slick";
import Button from "../shared/Button";
import Image1 from "../../assets/hero/monitor.png";
import Image2 from "../../assets/hero/headphone.png";
import Image3 from "../../assets/hero/gamepad.png";


const bannerData = [
	{
		id: 1,
		img: Image1,
		subtitle: "144 Hz",
		title: "OLED Curved",
		title2: "Monitor",
		description: "vadsjkrghajklehrg",
	},
	{
		id: 2,
		img: Image2,
		subtitle: "X Spatial Audio",
		title: "Immersive DTS ",
		title2: "Headphones",
		description: "asbvlakshbggv",
	},
	{
		id: 3,
		img: Image3,
		subtitle: "DualSense",
		title: "Adaptive Triggers",
		title2: "Gamepad",
		description: "asbfdhnafm",
	},
];
const Banner = () => {
	const settings = {
		dots: false,
		arrows:false,
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		cssEase: "ease-in-out",
		pauseonHover: false,
		pauseonFocus: true,
	};
	return (
		<div className="container dark:bg-gray-900">
			<div className="overflow-hidden rounded-3xl min-h-[550px] 
			sm:min-h-[650px] banner-bg-color flex justify-center items-center">
				{/* Banner Section */}
				<div className="container pb sm:pb-0">
				<Slider {...settings}>
					{bannerData.map((data) => (
						<div key={data.id}>
							<div className="grid grid-cols-1 sm:grid-cols-2">
								<div className=" flex flex-col justify-center gap-4 sm:pl-3 pt-12
								sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
									<h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
									<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
									<h1 className="text-5xl uppercase dark:opacity-25
									 text-white dark:text-white sm:text-[80px]
									 md:text-[100px] xl:text-[150px] font-bold">
										{data.title2}
									</h1>

									<div>
										<Button
											text="Shop Now"
											bgColor="bg-primary dark:bg-secondary/50"
											textColor="text-white dark:text-gray-300"
										/>
									</div>
								</div>
								<div className="order-1 sm:order-2">
									<div>
										<img src={data.img} alt=""
											className="w-[300px] h-[300px] sm:h-[570px] sm:w-[500px]
										 sm:scale-105 lg:scale-110 object-contain
										 mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
											style={data.id === 3 ? {  width : '550px'} : {}}
										/>
									</div>
								</div>
							</div>
						</div>
					))}
					</Slider>
					</div>
			</div>
		</div>
	);
};

export default Banner;
