import Tweet from './Tweet';
import '../styles/TweetList.css';

const TweetList = ({ tweets }) => {
	return (
		<ul className='tweet-list'>
			{tweets.map((tweet) => (
				<Tweet
					key={tweet.id}
					tweet={tweet}
				/>
			))}
		</ul>
	);
};

export default TweetList;
