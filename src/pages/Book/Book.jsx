import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {

	const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;



	return (
		<Link to={`/bookDetails/${bookId}`}>
		<div className='border-2 p-6'>
			{
				
			}
			<h1>{bookName}</h1>
			<p>{author}</p>
			<img src={image} alt="" />
		</div>
		</Link>
	);
};

export default Book;