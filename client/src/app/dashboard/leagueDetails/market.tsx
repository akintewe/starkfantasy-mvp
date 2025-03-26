import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Select from "@/components/select";
import star from "../../../../public/icons/star.svg";
import starPoint from "../../../../public/icons/starPoint.svg";
import plus from "../../../../public/icons/plus.svg";
import { playersData } from "@/data/mockMarketData";
import { Player } from "@/data/mockMarketData";

const calculatePoints = (player: Player) => {
	const pointsForGoals = player.goals * 10;
	const pointsForAssists = player.assists * 5;
	const pointsForMinutes = Math.floor(player.minutesPlayed / 90);
	return pointsForGoals + pointsForAssists + pointsForMinutes;
};

const positions = ["ALL POSITIONS", ...new Set(playersData.map((player) => player.position))];
const teams = ["ALL TEAMS", ...new Set(playersData.map((player) => player.team))];
const pointRanges = ["HIGHEST POINTS", "300+", "150-300", "0-150"];

const Market = () => {
	const [positionFilter, setPositionFilter] = useState("ALL POSITIONS");
	const [teamFilter, setTeamFilter] = useState("ALL TEAMS");
	const [pointsFilter, setPointsFilter] = useState("HIGHEST POINTS");
	const [searchQuery, setSearchQuery] = useState("");

	const filteredPlayers = playersData.filter((player) => {
		const points = calculatePoints(player);
		const matchesPosition =
			positionFilter === "ALL POSITIONS" || player.position === positionFilter;
		const matchesTeam = teamFilter === "ALL TEAMS" || player.team === teamFilter;
		const matchesPoints =
			pointsFilter === "HIGHEST POINTS" ||
			(pointsFilter === "300+" && points >= 300) ||
			(pointsFilter === "150-300" && points >= 150 && points < 300) ||
			(pointsFilter === "0-150" && points < 150);
		const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesPosition && matchesTeam && matchesPoints && matchesSearch;
	});

	const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPositionFilter(e.target.value);
	};

	const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setTeamFilter(e.target.value);
	};

	const handlePointsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setPointsFilter(e.target.value);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30, rotateY: 90 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			rotateY: 0,
			transition: {
				delay: i * 0.1,
				duration: 0.7,
				type: "spring",
				stiffness: 120,
				damping: 12,
			},
		}),
		exit: {
			opacity: 0,
			y: -30,
			rotateY: -90,
			transition: { duration: 0.4, ease: "easeIn" },
		},
	};

	const positionTagVariants = {
		rest: { scale: 1 },
		hover: {
			scale: 1.1,
			transition: { type: "spring", stiffness: 300, damping: 10 },
		},
	};

	const pointsBadgeVariants = {
		hidden: { scale: 0, rotate: -90 },
		visible: {
			scale: 1,
			rotate: 0,
			transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.3 },
		},
		hover: {
			scale: [1, 1.1, 1],
			transition: { repeat: Infinity, duration: 1, ease: "easeInOut" },
		},
	};

	const starVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: (i: number) => ({
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.5 + i * 0.1,
				duration: 0.3,
				type: "spring",
				stiffness: 200,
				damping: 10,
			},
		}),
		rest: { scale: 1, opacity: 1 },
		twinkle: {
			scale: [1, 1.3, 1],
			opacity: [1, 0.7, 1],
			transition: { duration: 0.8, ease: "easeInOut" },
		},
	};

	const plusIconVariants = {
		rest: { rotate: 0 },
		hover: {
			rotate: 90,
			transition: { duration: 0.3, ease: "easeOut" },
		},
	};

	const buttonVariants = {
		rest: { y: 0 },
		hover: {
			y: [0, -5, 0],
			transition: { duration: 0.5, repeat: Infinity, ease: "easeInOut" },
		},
	};

	return (
		<main className="min-h-screen text-white">
			<h2 className="text-5xl font-bold mb-6">Market</h2>

			<section className="flex flex-col py-[15px] px-[20px] rounded-[15px] justify-between md:flex-row gap-4 mb-8 bg-[#0F172BCC]">
				<section className="flex gap-[25px]">
					<Select
						data={positions}
						value={positionFilter}
						onChange={handlePositionChange}
						aria-label="Filter by position"
					/>

					<Select
						data={teams}
						value={teamFilter}
						onChange={handleTeamChange}
						aria-label="Filter by team"
					/>

					<Select
						data={pointRanges}
						value={pointsFilter}
						onChange={handlePointsChange}
						aria-label="Filter by points"
					/>
				</section>

				<div className="relative min-w-[420px]">
					<input
						type="text"
						className="bg-gray-900 text-white text-[14px] font-medium py-3 px-4 rounded-[20px] border-[0.5px] border-[#1E2939] focus:outline-none focus:ring-0 focus:transparent w-full"
						placeholder="Search"
						value={searchQuery}
						onChange={handleSearchChange}
						aria-label="Search players"
					/>
					<span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
						🔍
					</span>
				</div>
			</section>

			<section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
				<AnimatePresence mode="popLayout">
					{filteredPlayers.map((player, index) => {
						const points = calculatePoints(player);
						const rating = Math.min(5, Math.floor(points / 100));

						return (
							<motion.div
								key={player.name}
								className="group cursor-pointer bg-gray-700 rounded-[15px] shadow-lg flex flex-col border-[2px] border-gray-800 hover:border-amber-600 hover:animate-shimmer"
								variants={cardVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								custom={index}
								whileHover={{
									scale: 1,
									y: -5,
									transition: { duration: 0.3, ease: "easeOut" },
								}}
							>
								<div
									className="relative p-[10px] h-[170px] rounded-t-[15px] bg-cover bg-center"
									style={{
										backgroundImage: `url(${player.image})`,
										backgroundPosition: "top",
									}}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-[15px]"></div>

									<div className="relative flex flex-col h-full justify-between">
										<motion.span
											className="self-end bg-cyan-900 text-white text-xs font-semibold px-2 py-1 rounded-[20px]"
											variants={positionTagVariants}
											initial="rest"
											whileHover="hover"
										>
											{player.position}
										</motion.span>

										<div className="flex items-end justify-between">
											<div>
												<h3 className="text-lg font-semibold">
													{player.name}
												</h3>
												<p className="text-sm text-gray-300">
													{player.team}
												</p>
												<div className="flex items-center gap-1 my-2">
													{[...Array(5)].map((_, i) => (
														<motion.span
															key={i}
															className={
																i < rating
																	? "text-yellow-400"
																	: "text-gray-500"
															}
															variants={starVariants}
															initial="hidden"
															animate="visible"
															custom={i}
															whileHover="twinkle"
														>
															<img
																src={star}
																alt="star"
																className="w-4 h-4"
															/>
														</motion.span>
													))}
												</div>
											</div>

											<motion.div
												className="bg-orange-500 flex items-center gap-[5px] w-max h-max text-white rounded-full px-3 border-[5px] border-slate-900 mb-2"
												variants={pointsBadgeVariants}
												initial="hidden"
												animate="visible"
												whileHover="hover"
											>
												<img
													src={starPoint}
													alt="star point"
													className=""
												/>{" "}
												<p className="text-[20px] font-bold">{points}</p>
											</motion.div>
										</div>
									</div>
								</div>

								<div className="bg-slate-900 p-[10px] rounded-bl-[15px] rounded-br-[15px]">
									<div className="flex flex-col gap-1 border border-indigo-800 w-full p-[10px] rounded-lg mb-[10px]">
										<p className="text-base font-semibold uppercase text-indigo-800">
											Season Stats
										</p>
										<p className="text-sm">{`${player.goals} G, ${player.assists} A`}</p>
									</div>

									<motion.button
										className="bg-indigo-900 w-full text-white py-2 px-4 rounded-lg group-hover:bg-orange-500 transition flex items-center justify-center gap-2"
										variants={buttonVariants}
										initial="rest"
										whileHover="hover"
									>
										<motion.img
											src={plus}
											alt="plus"
											variants={plusIconVariants}
											initial="rest"
											whileHover="hover"
										/>{" "}
										<p className="text-base">Add to Team</p>
									</motion.button>
								</div>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</section>
		</main>
	);
};

export default Market;
