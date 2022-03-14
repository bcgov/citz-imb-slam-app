import Image from 'next/image';
import React from 'react';
import bcgovlogo from 'assets/images/bcgov-h.png';
import Link from 'next/link';

/**
 *
 * @returns {React.jsx}
 */
export const Navigation = () => {
	return (
		<nav className='nav'>
			<div className='nav-container'>
				<Link href='/' >
					<a className='nav-brand'>
						<div className='logo-block'>
							<Image
								src={bcgovlogo}
								className='nav-logo'
								alt='BC GOV Logo'
								width={113}
								height={30}
							/>
						</div>
						<h1 className='nav-header'>Software License Management</h1>
					</a>
				</Link>
				<div className='nav-group'>
					<ul className='nav-item-wrapper'>
						<li className='nav-item'>
							<a className='nav-link' to='/path1'>
								Link 1
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' to='/path2'>
								Link 2
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' to='/path3'>
								Link 3
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
