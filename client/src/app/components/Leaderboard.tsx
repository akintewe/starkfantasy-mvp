const PlayerRankings = () => {
  const topPlayers = [
    {
      id: 1,
      name: "Username",
      points: 13670,
      reward: "1000 STRK",
      badge: "/assets/leaderboard/medal.png",
    },
    {
      id: 2,
      name: "Username",
      points: 10210,
      reward: "750 STRK",
      badge: "/assets/leaderboard/gold.png",
    },
    {
      id: 3,
      name: "Username",
      points: 9890,
      reward: "500 STRK",
      badge: "/assets/leaderboard/silver.png",
    },
  ];

  const otherPlayers = [
    { id: 4, name: "Player Name", points: 9230, reward: "250 STRK" },
    { id: 5, name: "Player Name", points: 8641, reward: "100 STRK" },
    { id: 6, name: "Player Name", points: 7918, reward: "-" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col items-center p-4 md:p-6"
      style={{
        backgroundImage: "url('/assets/leaderboard/background.png')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-8 text-start">
          Player rankings
        </h1>

        <div
          className="backdrop-blur-lg rounded-2xl p-4 md:p-8"
          style={{ backgroundColor: "rgba(15, 23, 43, 0.35)" }}
        >
          {/* Top 3 players */}
          <div className="flex flex-col md:flex-row justify-center md:items-end  items-center gap-6 md:gap-10 mb-12">
            {/* 2nd place */}
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 bg-gray-300 border-2 border-[#FE9A00] rounded-sm mb-2 relative overflow-hidden shadow-[0_0_20px_#FE9A00]">
                <img
                  src="/assets/leaderboard/user.png"
                  alt="player"
                  className="rounded-full w-10 h-10 object-cover "
                />
              </div>
              <p className="text-white mb-5 text-sm md:text-base">
                {topPlayers[1].name}
              </p>
              <div
                // className="relative  p-4 md:p-6 w-32 md:w-40 h-[220px]"
                className="relative p-4 md:p-6 w-32 md:w-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #372AAC, transparent)",
                  borderTop: "1px solid white",
                  borderLeft: "1px solid white",
                  borderRight: "1px solid white",
                  borderBottom: "none",
                }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 border bg-[#1a1147] rounded-full px-2 py-1 text-white text-xs md:text-sm">
                  <img
                    src={topPlayers[1].badge}
                    alt="badge"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <div className="flex items-center gap-1 text-white text-base md:text-lg font-bold">
                    <img
                      src="/assets/leaderboard/star.png"
                      alt="star"
                      className="w-3 h-3 md:w-4 md:h-4"
                    />
                    <span> {topPlayers[1].points.toLocaleString()}</span>
                  </div>
                  {/* <p className="text-white text-base md:text-lg font-bold">
                    {topPlayers[1].points.toLocaleString()}
                  </p> */}
                  <p className="text-orange-400 mt-1 text-xs md:text-sm">
                    {topPlayers[1].reward}
                  </p>
                </div>
              </div>
            </div>

            {/* 1st place (Higher than others) */}
            {/* 1st place (Taller height) */}
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 bg-gray-300 border-2 border-[#FE9A00] rounded-sm mb-2 relative overflow-hidden shadow-[0_0_20px_#FE9A00]">
                <img
                  src="/assets/leaderboard/user.png"
                  alt="player"
                  className="rounded-full w-10 h-10 object-cover "
                />
              </div>
              <p className="text-white mb-5 text-sm md:text-base">
                {topPlayers[0].name}
              </p>
              <div
                className="relative  p-4 md:p-6 w-32 md:w-40 h-[200px]"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #372AAC, transparent)",
                  borderTop: "1px solid white",
                  borderLeft: "1px solid white",
                  borderRight: "1px solid white",
                  borderBottom: "none",
                }}
              >
                <div className="absolute -top-4 left-1/2 border transform -translate-x-1/2 bg-[#1a1147] rounded-full px-2 py-1 text-white text-xs md:text-sm">
                  <img
                    src={topPlayers[0].badge}
                    alt="badge"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center mt-8">
                  <div className="flex items-center gap-1 text-white text-base md:text-lg font-bold">
                    <img
                      src="/assets/leaderboard/star.png"
                      alt="star"
                      className="w-3 h-3 md:w-4 md:h-4"
                    />
                    <span>{topPlayers[0].points.toLocaleString()}</span>
                  </div>
                  <p className="text-orange-400 mt-1 text-xs md:text-sm">
                    {topPlayers[0].reward}
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd place */}
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 bg-gray-300 border-2 border-[#FE9A00] rounded-sm mb-2 relative overflow-hidden shadow-[0_0_20px_#FE9A00]">
                <img
                  src="/assets/leaderboard/user.png"
                  alt="player"
                  className="rounded-full w-10 h-10 object-cover "
                />
              </div>
              <p className="text-white mb-5 text-sm md:text-base">
                {topPlayers[2].name}
              </p>
              <div
                className="relative p-4 md:p-6 w-32 md:w-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #372AAC, transparent)",
                  borderTop: "1px solid white",
                  borderLeft: "1px solid white",
                  borderRight: "1px solid white",
                  borderBottom: "none",
                }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1a1147] border rounded-full px-2 py-1 text-white text-xs md:text-sm">
                  <img
                    src={topPlayers[2].badge}
                    alt="badge"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain"
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <div className="flex items-center gap-1 text-white text-base md:text-lg font-bold">
                    <img
                      src="/assets/leaderboard/star.png"
                      alt="star"
                      className="w-3 h-3 md:w-4 md:h-4"
                    />
                    <span> {topPlayers[2].points.toLocaleString()}</span>
                  </div>

                  {/* <p className="text-white text-base md:text-lg font-bold">
                    {topPlayers[2].points.toLocaleString()}
                  </p> */}
                  <p className="text-orange-400 mt-1 text-xs md:text-sm">
                    {topPlayers[2].reward}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other players table */}
          <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-white text-left text-sm md:text-base">
              <thead>
                <tr className=" bg-[#372AAC]">
                  <th className="p-2 md:p-4">Position</th>
                  <th className="p-2 md:p-4">Username</th>
                  <th className="p-2 md:p-4">Points</th>
                  <th className="p-2 md:p-4">Reward</th>
                </tr>
              </thead>
              <tbody className="bg-white/10">
                {otherPlayers.map((player) => (
                  <tr key={player.id} className="border-b border-white/10">
                    <td className="p-2 md:p-4">{player.id}ᵗʰ</td>
                    <td className="p-2 md:p-4">{player.name}</td>
                    <td className="p-2 md:p-4">
                      {player.points.toLocaleString()}
                    </td>
                    <td className="p-2 md:p-4">{player.reward}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerRankings;
