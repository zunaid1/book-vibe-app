import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
	const { id } = useParams();
	const bookId = parseInt(id);

	const data = useLoaderData();
	const singleBook = data.find(book => book.bookId === bookId);
	console.log(singleBook);
	//console.log(data);
	const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;


	return (
		<>
			<div className="card bg-base-100 shadow-2xl">
				<figure>
					<img
						src={image}
						alt="Images" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						Card Title
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">Fashion</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookDetails;