import React from "react";
import Heading from "../shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const blogData = [
	{
		id: 1,
		title: "Blog Post 1",
		description: "This is the first blog post.",
		image: Img1,
		date: "2020-01-01",
		author: "Harsh",
	},
	{
		id: 2,
		title: "Blog Post 1",
		description: "This is the first blog post.",
		image: Img2,
		date: "2020-01-01",
		author: "Harsh",
	},
	{
		id: 3,
		title: "Blog Post 1",
		description: "This is the first blog post.",
		image: Img3,
		date: "2020-01-01",
		author: "Harsh",
	},
];

const Blog = () => {
	return (
		<div className="my-12" id="blog">
			<div className="container">
				<Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />
			
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8  sm:gap-4 md:gap-7">
				{blogData.map((data) => (
					<div key={data.title} className="bg-white dark:bg-gray-900">
						<div className="overflow-hidden rounded-2xl mb-2">
							<img className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" src={data.image} alt="" />
						</div>
						<div className="space-y-2">
							<p className="text-xs text-gray-500">
								{data.date} by {data.author}
							</p>
							<p className="font-bold line-clamp-1">{data.title}</p>
							<p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
						</div>
					</div>
				))}
			</div>
            </div>
            </div>
	);
};

export default Blog;
