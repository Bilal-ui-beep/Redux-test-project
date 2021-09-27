import React from 'react';
import './App.css';
import FirstPage from './components/firstPage';
import SecondPage from './components/secondPage';
import ThirdPage from './components/thirdPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { ConnectesRouter as Router } from 'react-router-redux';
import FinalPage from './components/finalPage';
import { useSelector } from 'react-redux';
import { selectUser } from './store/userSlice';

function App() {
	const user = useSelector(selectUser);

	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/submissionPage' component={FinalPage} />
					<Route path='/thirdPage' component={ThirdPage} />
					<Route path='/secondPage' component={SecondPage} />
					<Route exact path='/' component={FirstPage} />
				</Switch>
			</Router>

			{/* {user ? <SecondPage /> : <FirstPage />} */}

			{/* {<SecondPage /> ? <ThirdPage /> : <SecondPage />}
			{<ThirdPage /> ? <FinalPage /> : <ThirdPage />} */}
		</div>
	);
}

export default App;
