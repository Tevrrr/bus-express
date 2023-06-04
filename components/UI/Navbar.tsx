/** @format */

'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import type { NextPage } from 'next';
import { useState } from 'react';

interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = () => {
	const { scrollY } = useScroll();
	const [bgMod, setBgMod] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setBgMod(true);
		} else {
			setBgMod(false);
		}
	});

	return (
		<motion.nav
			initial={{ translateY: -200 }}
			animate={{ translateY: 0 }}
			transition={{ type: 'spring', damping: 20, delay: 0.7 }}
			className={`w-full flex justify-center fixed transition-all duration-300 border-neutral z-30 ${
				bgMod ? 'bg-base-200 border-b-2 !translate-y-0 ' : ' '
			}`}>
			<div className=' container max-w-screen-2xl flex justify-end gap-14 pb-6 pt-10 pr-32 text-xl text-base-content'>
				<a className=' font-bold'>Услуги</a>
				<a className=' cursor-pointer'>Перимущества</a>
				<a className=' cursor-pointer'>Автомобили</a>
				<a className=' cursor-pointer'>Контакты</a>
			</div>
		</motion.nav>
	);
};

export default Navbar;
