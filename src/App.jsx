import { useState, useEffect, createContext, useContext } from 'react';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Profile from './components/Profile';
import fallbackData from './data/fallback_data.json';
import { ThemeContext } from './Theme';
import './App.css';

export const AppContext = createContext();

const App = () => {
	const [tweets, setTweets] = useState([]);
	const [user, setUser] = useState({
		name: 'Joe Smith',
		profilePicture: '/avatar.jpg',
	});
	// const [theme, setTheme] = useState('light');

	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		fetchTweets();
	}, []);

	const fetchTweets = async () => {
		try {
			const response = await fetch(
				'https://my.api.mockaroo.com/tweets?key=c8f44730'
			);

			if (!response.ok) {
				console.log('api error, using fallback data');
				setTweets(fallbackData);
				return;
			}

			const data = await response.json();

			if (data && Array.isArray(data)) {
				setTweets(data);
			} else {
				setTweets(fallbackData);
			}
		} catch (error) {
			console.log('api error, using fallback data');
			setTweets(fallbackData);
		}
	};

	const addTweet = (tweet) => {
		setTweets([tweet, ...tweets]);
	};

	return (
		<AppContext.Provider value={{ user, setUser }}>
			<div className={`App ${theme}`}>
				<Header />
				<div className='app-layout'>
					<Sidebar />
					<main className='main-feed'>
						<TweetInput addTweet={addTweet} />
						<TweetList tweets={tweets} />
					</main>
					<aside className='right-sidebar'>
						{/* Placeholder content */}
						<p>Right Sidebar Placeholder</p>
					</aside>
				</div>
			</div>
		</AppContext.Provider>
	);
};

export default App;
