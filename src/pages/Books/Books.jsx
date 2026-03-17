import React, { Suspense, useEffect, useState } from 'react';
//import Book from '../Book/Book';
import Book from '../Book/Book';

import loading from '../../Lotti/loading1.json';

const Books = () => {
	const [allBooks, setAllBooks] = useState([]);

	useEffect(() => {
		fetch("booksData.json")
			.then(res => res.json())
			.then(data => { setAllBooks(data) })

	}, [])



	return (
		<div>

			<h1 className='text-3xl font-bold text-center p-6'>Books: {allBooks.length}</h1>


			<div className='grid grid-cols-1 mg:grid-cols-2 
			lg:grid-cols-3 gap-2
			'>

				<Suspense fallback={loading}>
					{
						allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
					}

				</Suspense>
			</div>

		</div>
	);
};


export default Books;