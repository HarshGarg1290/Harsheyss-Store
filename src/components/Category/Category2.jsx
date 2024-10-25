import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/mouse.png";
import Image3 from "../../assets/category/keyboard.png";
import Button from "../shared/Button";

const Category2 = () => {
	return (
		<div className="py-8 dark:bg-gray-900">
			<div className="container">
				<div
					className="grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-4 gap-8"
				>
					<div
						className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-800/90 to-white/20 text-white rounded-3xl relative
           h-[320px] flex items-end"
					>
						<div>
							<div className="mb-4">
								<p className="mb-[2px] text-gray-300">Enjoy</p>
								<p className="text-2xl font-semibold mb-[2px] ">With</p>
								<p className="text-4xl xl:text-5xl font-bold opacity-45 mb-2">
									Consoles
								</p>
								<Button
									text="Browse"
									bgColor={"bg-white"}
									textColor={"text-black"}
								/>
							</div>
						</div>
						<img src={Image1} alt="" className="w-[270px] absolute right-10 " />
					</div>

					<div
						className="py-10 pl-5 bg-gradient-to-br from-brandOrange to-brandOrange/70 text-white rounded-3xl relative
           h-[320px] flex items-end"
					>
						<div>
							<div className="mb-4">
								<p className="mb-[2px] text-white">Enjoy</p>
								<p className="text-2xl font-semibold mb-[2px] ">With</p>
								<p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
									Gaming mouse
								</p>
								<Button
									text="Browse"
									bgColor={"bg-white"}
									textColor={"text-brandOrange"}
								/>
							</div>
						</div>
						<img
							src={Image2}
							alt=""
							className="w-[150px] absolute right-4"
						/>
					</div>

					<div
						className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl relative
           h-[320px] flex items-end"
					>
						<div>
							<div className="mb-4">
								<p className="mb-[2px] text-white">Enjoy</p>
								<p className="text-2xl font-semibold mb-[2px] ">With</p>
								<p className="text-4xl xl:text-5xl font-bold opacity-30 mb-2">
									Gaming Keyboards
								</p>
								<Button
									text="Browse"
									bgColor={"bg-white"}
									textColor={"text-brandBlue"}
								/>
							</div>
						</div>
						<img
							src={Image3}
							alt=""
							className="w-[250px] absolute  -right-10"
							style={{transform :" rotateZ(-140deg) rotateX(180deg) "}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category2;
