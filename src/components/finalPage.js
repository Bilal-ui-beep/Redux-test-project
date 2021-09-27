import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, backToFirstPage } from '../store/userSlice';

const FinalPage = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	// console.log(data);
	// useEffect(() => {
	//     dispatch(loadBugs());

	// }, [])

	const handleGoingBack = (event) => {
		event.preventDefault();

		dispatch(backToFirstPage());
	};

	return (
		<div>
			<h1>Data subbmitted In The Store</h1>
			<ul>{user.firstName}</ul>
			<ul>{user.lastName}</ul>
			<ul>{user.nationality}</ul>
			<ul>{user.identity}</ul>
			<ul>{user.address}</ul>
			<ul>{user.business}</ul>

			<button onClick={(event) => handleGoingBack(event)}>
				<Link
					to={{
						pathname: '/',
					}}
					style={{
						textDecoration: 'none',
						color: 'black',
					}}>
					{' '}
					BACK TO THE FIRST PAGE ?
				</Link>
			</button>
		</div>
	);
};

export default FinalPage;
