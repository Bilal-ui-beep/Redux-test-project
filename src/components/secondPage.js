import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toThirdPage } from '../store/userSlice';
import ThirdPage from './thirdPage';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/userSlice';

const SecondPage = () => {
	const user = useSelector(selectUser);

	const [nationality, setNationality] = useState('');
	const [identity, setIdentity] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(
			toThirdPage({
				nationality: nationality,
				identity: identity,
				toTheThirdPage: true,
			}),
		);
	};

	return (
		<>
			<div>Second</div>
			<form onSubmit={(event) => handleSubmit(event)}>
				<div
					style={{
						padding: '10px',
					}}>
					<label>
						Nationality:
						<input type='text' name='nationality' placeholder='Nationality' value={nationality} onChange={(event) => setNationality(event.target.value)} />
					</label>
					<label>
						Id Card Number:
						<input type='number' name='idCardNumber' placeholder='ID #' value={identity} onChange={(event) => setIdentity(event.target.value)} />
					</label>
					<button type='submit'>Submit</button>
				</div>
			</form>
			<button>
				<Link
					to={{
						pathname: '/thirdpage',
					}}
					style={{
						textDecoration: 'none',
						color: 'black',
					}}>
					Third Page
				</Link>
			</button>
			{/* {user ? <ThirdPage /> : <SecondPage />} */}
		</>
	);
};

export default SecondPage;
