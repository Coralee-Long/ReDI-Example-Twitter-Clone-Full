import React from 'react';
import '../styles/Tweet.css';

const Tweet = ({ tweet }) => {
	return (
		<div className='tweet'>
			<img
				src={tweet.thumbnail || '/assets/default-avatar.png'}
				alt='User Avatar'
				className='tweet-avatar'
			/>
			<div className='tweet-content'>
				<div className='tweet-header'>
					<strong>{tweet.name}</strong>
					<span className='tweet-date'>
						{new Date(tweet.publishedAt).toLocaleString()}
					</span>
				</div>
				<p>{tweet.content}</p>
				<div className='tweet-interactions'>
					<button>Like</button>
					<button>Retweet</button>
					<button>Reply</button>
				</div>
			</div>
		</div>
	);
};

export default Tweet;
