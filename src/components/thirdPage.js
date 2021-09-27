import React, { useState } from 'react';
import { toFinalPage } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ThirdPage = () => {
	const [address, setAddress] = useState('');
	const [business, setBusiness] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			toFinalPage({
				address: address,
				business: business,
				toTheFinalPage: true,
			}),
		);
	};

	return (
		<>
			<div>Third Page</div>
			<form onSubmit={(event) => handleSubmit(event)}>
				<div
					style={{
						padding: '10px',
					}}>
					<label>
						Home Address:
						<input type='text' name='homeAddress' placeholder='Address' value={address} onChange={(event) => setAddress(event.target.value)} />
					</label>
					<label>
						Business Name:
						<input type='text' name='businessName' placeholder='Business Name' value={business} onChange={(event) => setBusiness(event.target.value)} />
					</label>
					<button type='submit'>Submit</button>
				</div>
			</form>
			<button>
				<Link
					to={{
						pathname: '/submissionPage',
					}}
					style={{
						textDecoration: 'none',
						color: 'black',
					}}>
					Click To Get
				</Link>
			</button>
		</>
	);
};

export default ThirdPage;
