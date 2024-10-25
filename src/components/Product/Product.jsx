import React from 'react'
import Heading from '../shared/Heading';
import ProductCard from './ProductCard';

import Img1 from "../../assets/product/p-1.png";
import Img2 from "../../assets/product/p-2.png";
import Img3 from "../../assets/product/p-3.png";
import Img4 from "../../assets/product/p-4.png";
import Img5 from "../../assets/product/p-5.png";
import Img6 from "../../assets/product/p-6.png";
import Img7 from "../../assets/product/p-7.png";
import Img8 from "../../assets/product/p-8.png";


const ProductsData = [
	{
		id: 1,
		img: Img1,
		title: "Boat Headphone",
		price: "120",
		aosDelay: "0",
	},
	{
		id: 2,
		img: Img2,
		title: "Smart Watch",
		price: "420",
		aosDelay: "200",
	},
	{
		id: 3,
		img: Img3,
		title: "Spiderman Gamepad",
		price: "320",
		aosDelay: "400",
	},
	{
		id: 4,
		img: Img4,
		title: "Slim Display",
		price: "220",
		aosDelay: "600",
	},

];
const ProductsData2 = [
	{
		id: 1,
		img: Img5,
		title: "2 in 1 Laptop",
		price: "120",
		aosDelay: "0",
	},
	{
		id: 2,
		img: Img6,
		title: "Boat Earphones",
		price: "420",
		aosDelay: "200",
	},
	{
		id: 3,
		img: Img7,
		title: "Razer Mouse",
		price: "320",
		aosDelay: "400",
	},
	{
		id: 4,
		img: Img8,
		title: "Razer Keyboard",
		price: "220",
		aosDelay: "600",
	},
];
const Product = () => {
    return (
			<div id='products'>
				<div className="container">
                <Heading title={"Our Products"} subtitle={"Explore our products"} />
                
                <ProductCard data={ProductsData} />																						
                <ProductCard data={ProductsData2} />																						
				</div>
			</div>
		);
}

export default Product