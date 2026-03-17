import React from 'react';
import bookImage from '../../assets/hero_img.jpg'


const Banner = () => {


	return (
		<div className='flex flex-row-reverse md:flex-row  justify-between gap-2'>
			<div className='flex flex-col justify-center items-center space-y-5 p-3 text-center'>
				<h1 className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, perspiciatis.</h1>
				<button className='btn btn-primary text-xl px-10 py-8'>Explore Books</button>
			</div>

			<div>
				<img className='bg-cover w-full' src={bookImage} alt="" />
			</div>
		</div>
	);
};

export default Banner;