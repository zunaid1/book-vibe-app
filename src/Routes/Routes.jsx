import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';


const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <ErrrorPage></ErrrorPage>, 
		children: [
			{
				index: true,
				path: "/",
				Component: Home
			},
			{
				path: "/about",
				Component: About
			},
			{
				path: "/bookDetails/:id",
				loader: () => fetch('booksData.json'),
				Component: BookDetails
			}
		]
	},
]);


export default router;