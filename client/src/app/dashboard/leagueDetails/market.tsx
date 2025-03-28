import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Select from "@/components/select";
import star from "../../../../public/icons/star.svg";
import starPoint from "../../../../public/icons/starPoint.svg";
import search from "../../../../public/icons/search.svg";
import plus from "../../../../public/icons/plus.svg";
import { playersData, Player } from "@/data/mockMarketData";
import Modal from "@/components/modal";
import RadarChart from "@/components/RadarChart";

const calculatePoints = (player: Player) => {
  const pointsForGoals = player.goals * 10;
  const pointsForAssists = player.assists * 5;
  const pointsForMinutes = Math.floor(player.minutesPlayed / 90);
  return (pointsForGoals + pointsForAssists + pointsForMinutes) * 5;
};

const positions = ["ALL POSITIONS", ...new Set(playersData.map((player) => player.position))] as const;
const teams = ["ALL TEAMS", ...new Set(playersData.map((player) => player.team))] as const;
const pointRanges = ["HIGHEST POINTS", "300+", "150-300", "0-150"] as const;

type PositionFilter = typeof positions[number];
type TeamFilter = typeof teams[number];
type PointsFilter = typeof pointRanges[number];

const Market = () => {
  const [positionFilter, setPositionFilter] = useState<PositionFilter>("ALL POSITIONS");
  const [teamFilter, setTeamFilter] = useState<TeamFilter>("ALL TEAMS");
  const [pointsFilter, setPointsFilter] = useState<PointsFilter>("HIGHEST POINTS");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const filteredPlayers = playersData.filter((player: Player) => {
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
    setPositionFilter(e.target.value as PositionFilter);
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTeamFilter(e.target.value as TeamFilter);
  };

  const handlePointsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPointsFilter(e.target.value as PointsFilter);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const openModal = (player: Player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlayer(null);
  };

  const addToTeam = () => {
    closeModal();
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


  const nameVariants = {
    rest: {
      color: "#FFFFFF",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      color: "#F97316",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen text-white">
      <h2 className="text-5xl font-bold mb-6">Market</h2>
      <section className="flex flex-col py-[15px] px-[20px] rounded-[15px] justify-between md:flex-row flex-wrap gap-4 mb-8 bg-[#0F172BCC]">
        <section className="flex flex-wrap md:flex-nowrap gap-[18px] md:gap-[25px]">
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
        <div className="relative w-full md:w-[420px]">
          <input
            type="text"
            className="bg-gray-900 text-white text-[14px] font-medium py-3 px-4 pl-[45px] rounded-[20px] border-[0.5px] border-[#1E2939] focus:outline-none focus:ring-0 focus:transparent w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            aria-label="Search players"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <img src={search} alt="" />
          </span>
        </div>
      </section>
      <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPlayers.map((player: Player, index: number) => {
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
                onClick={() => openModal(player)}
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
                      className="self-end bg-cyan-900 text-white text-xs font-semibold px-4 py-[6px] rounded-[20px]"
                      variants={positionTagVariants}
                      initial="rest"
                      whileHover="hover"
                    >
                      {player.position}
                    </motion.span>
                    <div className="flex items-end justify-between">
                      <div>
                        <motion.h3
                          className="text-lg font-semibold  group-hover:[-webkit-text-stroke:0.5px_#F54900]"
                          variants={nameVariants}
                          initial="rest"
                          whileHover="hover"
                        >
                          {player.name}
                        </motion.h3>
                        <p className="text-sm text-gray-300">{player.team}</p>
                        <div className="flex items-center gap-1 my-2">
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              className={
                                i < rating ? "text-yellow-400" : "text-gray-500"
                              }
                              variants={starVariants}
                              initial="hidden"
                              animate="visible"
                              custom={i}
                              whileHover="twinkle"
                            >
                              <img src={star} alt="star" className="w-4 h-4" />
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
                        <img src={starPoint} alt="star point" className="" />
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
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(player);
                    }}
                  >
                    <motion.img
                      src={plus}
                      alt="plus"
                      variants={plusIconVariants}
                      initial="rest"
                      whileHover="hover"
                    />
                    <p className="text-base">Add to Team</p>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
      <Modal isOpen={isModalOpen} bg={selectedPlayer?.bgColor || ""} onClose={closeModal}>
        {selectedPlayer && (
          <div className="flex flex-col w-full">
            <div
              className="relative h-[200px] sm:h-[240px] md:h-[280px] rounded-t-[15px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${selectedPlayer.image})`,
                backgroundPosition: "top",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-[15px]"></div>
              <div className="relative flex flex-col justify-between p-[10px] sm:p-[15px]">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-cyan-900 text-white text-[10px] sm:text-xs font-semibold px-4 py-[6px] rounded-[20px]">
                    {selectedPlayer.position}
                  </span>
                  <button
                    className="text-white text-[20px] sm:text-[25px] hover:text-white"
                    onClick={closeModal}
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-slate-950 pt-[15px] sm:pt-[25px] px-[15px] sm:px-[30px] pb-[20px] sm:pb-[30px]">
              <div className="flex flex-col sm:flex-row items-start justify-between pt-[20px] sm:pt-[30px] pb-[15px] sm:pb-[20px] gap-4">
                <div className="flex flex-col gap-[1px] mt-[-12px]">
                  <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold">{selectedPlayer.name}</h3>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-300">{selectedPlayer.team}</p>
                  <div className="flex items-center gap-1 my-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        className={
                          i < Math.min(5, Math.floor(calculatePoints(selectedPlayer) / 100))
                            ? "text-yellow-400"
                            : "text-gray-500"
                        }
                        variants={starVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        whileHover="twinkle"
                      >
                        <img src={star} alt="star" className="w-5 h-5 sm:w-6 sm:h-6" />
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="bg-orange-500 flex items-center justify-center gap-[5px] w-[120px] sm:w-[140px] md:w-[163px] h-[50px] sm:h-[55px] md:h-[60px] text-white rounded-[15px] px-[10px] sm:px-[12px] py-[10px] sm:py-[12px]">
                  <img src={starPoint} alt="star point" className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
                  <p className="text-[24px] sm:text-[26px] md:text-[30px] font-medium">{calculatePoints(selectedPlayer)}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg border-[2px] border-indigo-900">
                  <p className="text-sm sm:text-base font-bold uppercase text-indigo-800 mb-2">
                    Season Stats
                  </p>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] flex justify-between">
                    Goals: <span className="font-bold">{selectedPlayer.goals}</span>
                  </p>
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] flex justify-between">
                    Assists: <span className="font-bold">{selectedPlayer.assists}</span>
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg border-[2px] border-indigo-900">
                  <p className="text-sm sm:text-[20px] font-bold uppercase text-indigo-800 mb-2">
                    Performance
                  </p>
                  <RadarChart selectedPlayer={selectedPlayer} />
                </div>
              </div>
              <motion.button
                className="mt-4 sm:mt-6 w-full bg-orange-600 text-white py-[5px] px-4 rounded-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => addToTeam()}
              >
                <img src={plus} alt="plus" className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
                <p className="text-sm sm:text-base font-semibold">
                  Add to team - {calculatePoints(selectedPlayer)} points
                </p>
              </motion.button>
            </div>
          </div>
        )}
      </Modal>
    </main>
  );
};

export default Market;