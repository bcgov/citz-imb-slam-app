import bcgovlogo from 'assets/images/bcgov-h.png';
import slamlogo from 'assets/images/slam-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {React, useState } from 'react';
import { AvatarChip, UserMenu } from 'components';




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
								src={slamlogo}
								className='nav-logo-main'
								alt='BC GOV Logo'
								width={40}
								height={40}
							/>
						</div>
						<h1 className='nav-header'>License Management</h1>
					</a>
				</Link>
				<div className='nav-group'>
					<ul className='nav-item-wrapper'>
						<li className='nav-item'>
							<a onClick={() => router.push('/software')}>Software</a>
						</li>
						<li>
							<a onClick={() => router.push('/licensees')}>Licensees</a>
						</li>
						<li>
							<a onClick={() => router.push('/contact')}>Contact</a>
						</li>
						<li>
							<UserMenu title='Baby Yoda' />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
