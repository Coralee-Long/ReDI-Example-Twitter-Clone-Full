import '../styles/Profile.css';

const Profile = ({ user }) => {
	return (
		<div className='profile'>
			<img
				src={user.profilePicture}
				alt={`${user.name}'s avatar`}
				className='profile-avatar'
			/>
			<h2 className='profile-name'>{user.name}</h2>
		</div>
	);
};

export default Profile;
