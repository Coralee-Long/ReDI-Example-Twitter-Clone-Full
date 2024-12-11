import { useState } from 'react';
import Profile from './Profile';
import '../styles/TweetInput.css';

const TweetInput = ({ addTweet, user }) => {
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!content.trim()) return;

		const newTweet = {
			id: Date.now(),
			content,
			publishedAt: new Date().toISOString(),
			user: {
				name: 'User',
				profilePicture: '/gen-avatar.png',
			},
		};

		addTweet(newTweet);
		setContent('');
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='tweet-input-container'>
				<div className='tweet-input-avatar'>
					<Profile user={user} />
				</div>
				<textarea
					placeholder="What is happening?!"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className='tweet-input'
				/>
			</form>
			<div className='tweet-input-bottom-container'>
				<button
					type='submit'
					className='tweet-button'>
					Post
				</button>
			</div>
		</>
	);
};

export default TweetInput;
