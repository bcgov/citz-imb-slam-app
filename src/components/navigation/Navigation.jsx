import bcgovlogo from 'assets/images/bcgov-h.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

/**
 *
 * @returns {React.jsx}
 */
export const Navigation = () => {
	const router = useRouter();
	return (
		<nav className='nav'>
			<div className='nav-container'>
				<Link href='/'>
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
							<a onClick={() => router.push('/software')}>Software</a>
						</li>
						<li className='nav-item'>
							<a onClick={() => router.push('/licensees')}>Licensees</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
