import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { TiTickOutline } from "react-icons/ti";
import { MdChecklistRtl } from "react-icons/md";
import { addToStoredDB } from '../../utility/addToDB';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)



const BookDetails = () => {
	const { id } = useParams();
	const bookId = parseInt(id);

	const data = useLoaderData();
	const singleBook = data.find(book => book.bookId === bookId);
	console.log(singleBook);
	//console.log(data);
	const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;




	const handleMarkAsRead = (id) => {
		addToStoredDB(id);

		MySwal.fire({
			title: <p>Hello World</p>,
			didOpen: () => {
				// `MySwal` is a subclass of `Swal` with all the same instance & static methods
				MySwal.showLoading()
			},
		}).then(() => {
			return MySwal.fire(<p>Shorthand works too</p>)
		})

	}


	return (
		<>
			<div className="card bg-base-100 shadow-2xl flex flex-col md:flex-row gap-2 items-center justify-center">
				<figure className='w-full md:w-1/2'>
					<img
						src={image}
						alt="Images" />
				</figure>
				<div className="relative w-full md:w-1/2 px-6 py-3">
					<h1 className="card-title text-2xl font-bold text-center">
						{bookName}

					</h1>
					<div className="badge badge-secondary absolute top-3 right-3 text-[16px] px-6 py-3">{author}</div>
					<p className='my-3 text-justify'>{review}</p>
					<div className="card-actions justify-center items-end" >



						<button onClick={() => { handleMarkAsRead(id) }} className="btn btn-outline btn-primary px-6 py-3 text-xl c"><TiTickOutline />
							Mark as Read</button>
						<div className="btn btn-outline btn-primary px-6 py-3 text-xl"><MdChecklistRtl />
							Add to WishList</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookDetails;