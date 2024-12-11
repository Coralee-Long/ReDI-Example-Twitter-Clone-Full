import '../styles/Sidebar.css';

const Sidebar = () => {
	const links = [
		{ label: 'Home', icon: '/assets/home-icon.svg' },
		{ label: 'Explore', icon: '/assets/search-icon.svg' },
		{ label: 'Notifications', icon: '/assets/notifications-icon.svg' },
		{ label: 'Messages', icon: '/assets/mail-icon.svg' },
		{ label: 'User', icon: '/assets/user-icon.svg' },
		{ label: 'More', icon: '/assets/more-icon.svg' },
	];

	return (
		<aside className='sidebar'>
			<ul className='sidebar-links'>
				{links.map((link, index) => (
					<li
						key={index}
						className='sidebar-link'>
						<img
							src={link.icon}
							alt={`${link.label} icon`}
							className='sidebar-icon'
						/>
						<p className="icon-labels">{link.label}</p>
					</li>
				))}
			</ul>
			<button className='sidebar-post'>Post</button>
		</aside>
	);
};

export default Sidebar;
