import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';


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
				
			}
		]
	},
]);


export default router;