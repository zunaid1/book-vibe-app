import React from 'react';
import { Link } from 'react-router';
import { BiAlarm } from "react-icons/bi";







const Book = ({ book }) => {

	const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;



	return (
		<Link to={`/bookDetails/${bookId}`}>
			<div className='border-2 p-6 flex flex-row gap-3'>
				<div className='w-4/12'>
					<img src={image} alt="" />
				</div>
				<div className='w-8/12 space-y-2'>
					<h1 className='text-xl font-bold'>{bookName}</h1>
					<p className='text-xl'>BY: {author}</p>
					<div className='flex flex-row justify-between'>
						<div>
							<h1 className='mr-2 font-bold'>Tag </h1>
							<div className='flex gap-6'>
								{tags.map(t => <span className='text-green-700'>{t}</span>)}
							</div>
						</div>


						<div>
							<BiAlarm size={20} />
							{
								yearOfPublishing
							}
						</div>

					</div>
					<h1 className='text-2xl'>Total Page: {totalPages}</h1>
					<h1 className='text-2xl'>Ratign: {rating}</h1>

				</div>




		</div>
		</Link>
	);
};

export default Book;