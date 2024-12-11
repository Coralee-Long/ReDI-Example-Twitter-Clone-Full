import { useState } from 'react';
import '../styles/TweetInput.css';

const TweetInput = ({ addTweet }) => {
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
		<form
			onSubmit={handleSubmit}
			className='tweet-input-container'>
			<textarea
				placeholder="What's happening?"
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className='tweet-input'
			/>

			<button
				type='submit'
				className='tweet-button'>
				Tweet
			</button>
		</form>
	);
};

export default TweetInput;
