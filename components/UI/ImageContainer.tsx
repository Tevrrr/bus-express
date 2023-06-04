/** @format */

'use client';
import { motion, useInView } from 'framer-motion';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRef } from 'react';

interface ImageContainerProps {
	src: string;
	className?: string;
}

const ImageContainer: NextPage<ImageContainerProps> = ({
	src,
	className = '',
}) => {
	const conainer = useRef(null);
	const isInView = useInView(conainer, { once: true, amount: 0.6 });
	return (
		<div
			ref={conainer}
			className={` flex items-center justify-center overflow-hidden  rounded-xl grow h-40 md:h-80 ${className}`}>
			<motion.div
				initial={{
					borderRadius:  99,
				}}
				animate={{
					width: isInView ? '100%' : 0,
					height: isInView ? '100%' : 0,
					borderRadius: isInView ? 12 : 99,
				}}
				transition={{ type: 'spring', damping: 30, }}
				className=' overflow-hidden relative bg-accent-content'>
				<Image src={src} alt='' fill className=' object-cover' />
			</motion.div>
		</div>
	);
};

export default ImageContainer;
