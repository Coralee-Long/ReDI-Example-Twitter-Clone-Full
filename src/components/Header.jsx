import { useContext } from 'react';
import { ThemeContext } from '../Theme.jsx';
import '../styles/Header.css';

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<header className='header'>
			<div className='header-left'>
				<img
					src='/assets/twitter-icon.svg' // Add a logo asset
					alt='Twitter Logo'
					className='header-logo'
				/>
			</div>
			<div className='header-right'>
				<button
					className='theme-toggle'
					onClick={() => toggleTheme()}>
					{theme}
				</button>
			</div>
		</header>
	);
};

export default Header;
