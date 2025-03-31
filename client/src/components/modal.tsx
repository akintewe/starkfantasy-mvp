import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
	isOpen: boolean;
	bg: string;
	onClose: () => void;
	children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, bg, onClose, children }) => {
	if (!isOpen) return null;

	const modalVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.3, ease: "easeOut" },
		},
		exit: {
			opacity: 0,
			scale: 0.8,
			transition: { duration: 0.2, ease: "easeIn" },
		},
	};

	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 0.5, transition: { duration: 0.3 } },
		exit: { opacity: 0, transition: { duration: 0.2 } },
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						className="fixed inset-0 bg-black z-40"
						variants={backdropVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={onClose}
					/>
					<div className="  bg-red-300 w-full">
						<motion.div
							style={{ backgroundColor: bg }}
							className={` fixed top-[5%] md:left-[15%] lg:left-[30%] left-[5%] transform -translate-x-1/2 -translate-y-1/2 bg-[#A9ABAF] ${bg} rounded-[15px] shadow-lg z-50 w-[90%] max-w-[700px] max-h-[90vh] overflow-y-auto  md:w-[70%] lg:w-[50%] text-white`}
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<div className="w-full flex flex-col items-center justify-center">
								{children}
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Modal;
