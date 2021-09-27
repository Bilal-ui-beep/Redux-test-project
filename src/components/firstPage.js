import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../App.css';
import { toSecondPage } from '../store/userSlice';

const FirstPage = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			toSecondPage({
				firstName: firstName,
				lastName: lastName,
				toTheSecondPage: true,
			}),
		);
	};

	return (
		<>
			<div>First Page</div>
			<form onSubmit={(event) => handleSubmit(event)}>
				<input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />

				<input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} />

				<button type='submit'>Submit</button>
			</form>
			<button>
				<Link
					to={{
						pathname: '/secondPage',
					}}
					style={{
						textDecoration: 'none',
						color: 'black',
					}}>
					Second Page
				</Link>
			</button>
			{/* <div
				style={{
					padding: '10px',
				}}
				onSubmit={(event) => handleSubmit(event)}>
				<input type='text' name='firstName' placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />

				<input type='text' name='lastName' placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} />

				<button type='submit'>
					<Link
						to={{
							pathname: '/secondPage',
						}}
						style={{
							textDecoration: 'none',
							color: 'black',
						}}>
						Second Page
					</Link>
				</button>
			</div> */}
		</>
	);
};

export default FirstPage;
