import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/laptop.png";
import Button from "../shared/Button";

const Category = () => {
	return (
		<div className="py-8 dark:bg-gray-900" id="shop">
			<div className="container">
				<div
					className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 gap-8"
				>
					<div
						className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative
           h-[320px] flex items-end"
					>
						<div>
							<div className="mb-4">
								<p className="mb-[2px] text-gray-400">Enjoy</p>
								<p className="text-2xl font-semibold mb-[2px] ">With</p>
								<p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
									Earphones
								</p>
								<Button
									text="Browse"
									bgColor={"bg-white"}
									textColor={"text-black"}
								/>
							</div>
						</div>
						<img src={Image1} alt="" className="w-[320px] absolute bottom-0" />
					</div>

					<div
						className="py-10 pl-5 bg-gradient-to-br from-brandPurple/90 to-brandPurple/70 text-white rounded-3xl relative
           h-[320px] flex items-end"
					>
						<div>
							<div className="mb-4">
								<p className="mb-[2px] text-white">Enjoy</p>
								<p className="text-2xl font-semibold mb-[2px] ">With</p>
								<p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
									Gadgets
								</p>
								<Button
									text="Browse"
									bgColor={"bg-white"}
									textColor={"text-brandBlue"}
								/>
							</div>
						</div>
						<img
							src={Image2}
							alt=""
							className="w-[320px] absolute lg:top-[40px] -right-14"
						/>
					</div>

					<div
						className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandPink/90 to-brandPink/50 text-white rounded-3xl relative
           h-[320px] flex items-end"
					>
						<div>
							<div className="mb-4">
								<p className="mb-[2px] text-white">Enjoy</p>
								<p className="text-2xl font-semibold mb-[2px] ">With</p>
								<p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
									Gaming Laptops
								</p>
								<Button
									text="Browse"
									bgColor={"bg-white"}
									textColor={"text-brandPink"}
								/>
							</div>
						</div>
						<img
							src={Image3}
							alt=""
							className="w-[300px] absolute -top-14 -translate-y-1/2 -right-0"
							style={{
								transform:
									"perspective(1000px) rotateX(10deg) rotateY(190deg) rotateZ(10deg)",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
