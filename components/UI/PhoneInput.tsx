/** @format */

import { motion } from 'framer-motion';
import type { NextPage } from 'next';

interface PhoneInputProps {}

const PhoneInput: NextPage<PhoneInputProps> = () => {
	return (
		<div className='flex flex-col md:flex-row items-center gap-8 md:gap-0 w-full md:bg-base-300 text-base-content rounded-xl'>
			<input
				className=' md:bg-opacity-0 bg-base-300  placeholder:text-base-content font-normal rounded-xl text-xl grow py-8 px-10 outline-none'
				type='tel'
				placeholder='Номер телефона'
			/>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className=' rounded-xl text-3xl leading-7 text-accent-content bg-accent  py-7 px-8 drop-shadow-down'>
				Отправить
			</motion.button>
		</div>
	);
};

export default PhoneInput;
