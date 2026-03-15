import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className='flex flex-1 flex-col'>
				<Outlet></Outlet>
			</div>

			<Footer></Footer>
		</>
	);
};

export default Root;