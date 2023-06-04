/** @format */
'use client';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

interface PanelOrderCallProps {}

const PanelOrderCall: NextPage<PanelOrderCallProps> = () => {
	return (
		<div className='flex flex-col items-center gap-8 p-6 md:p-8 bg-accent text-accent-content rounded-3xl w-full'>
			<div className='flex flex-col gap-4 w-full'>
				<h4>Ваш номер телефона</h4>

				<input
					type='tel'
					className=' bg-accent-focus px-7 py-5 rounded-2xl placeholder:text-accent-content outline-none'
					placeholder='Номер телефона'
				/>
			</div>
			<div className='flex flex-col gap-4 w-full'>
				<h4>Дополнительная информация</h4>
				<textarea
					className=' h-60 bg-accent-focus px-7 py-5 rounded-2xl rounded-br-none placeholder:text-accent-content outline-none'
					placeholder='Укажите дополнительную информацию (необязательно)'
				/>
			</div>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className=' bg-neutral text-neutral-content rounded-xl text-3xl px-7 py-4'>
				Отправить
			</motion.button>
		</div>
	);
};

export default PanelOrderCall;
