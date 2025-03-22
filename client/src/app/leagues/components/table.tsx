// src/app/leagues/components/table.tsx

import React, { useState, useMemo } from 'react';

interface Player {
  name: string;
  team: string;
  position: string;
  price: number;
  pointsPerMatch: number;
  selectedPercentage: number;
  goals: number;
  assists: number;
  minutesPlayed: number;
}

interface TableProps {
  players: Player[];
}

const Table: React.FC<TableProps> = ({ players: initialPlayers }) => {
  const [sortConfig, setSortConfig] = useState<{ key: keyof Player; direction: 'asc' | 'desc' } | null>(null);
  const [positionFilter, setPositionFilter] = useState('ALL');
  const [teamFilter, setTeamFilter] = useState('ALL');
  const [priceFilter, setPriceFilter] = useState('1K STRK');
  const [searchQuery, setSearchQuery] = useState('');

  const positions = useMemo(() => {
    const uniquePositions = Array.from(new Set(initialPlayers.map((player) => player.position)));
    return ['ALL', ...uniquePositions];
  }, [initialPlayers]);

  const teams = useMemo(() => {
    const uniqueTeams = Array.from(new Set(initialPlayers.map((player) => player.team)));
    return ['ALL', ...uniqueTeams];
  }, [initialPlayers]);

  const priceRanges = useMemo(() => {
    return ['1K STRK', '2K STRK', '3K STRK'];
  }, []);

  // Filter and sort players
  const filteredPlayers = useMemo(() => {
    let result = [...initialPlayers];

    if (searchQuery) {
      result = result.filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply position filter
    if (positionFilter !== 'ALL') {
      result = result.filter((player) => player.position === positionFilter);
    }

    // Apply team filter
    if (teamFilter !== 'ALL') {
      result = result.filter((player) => player.team === teamFilter);
    }

    // Apply price filter (example logic)
    if (priceFilter !== '1K STRK') {
      // Add logic for price filtering if needed
    }

    // Apply sorting
    if (sortConfig) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [initialPlayers, searchQuery, positionFilter, teamFilter, priceFilter, sortConfig]);

  // Sorting function
  const sortBy = (key: keyof Player) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  // Helper to get the arrow for a column
  const getSortArrow = (key: keyof Player) => {
    if (sortConfig?.key === key) {
      return sortConfig.direction === 'asc' ? '▲' : '▼';
    }
    return '▼';
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPositionFilter(e.target.value);
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTeamFilter(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceFilter(e.target.value);
  };

  return (
    <div className="w-full p-4 bg-gray-900 text-white rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <select
            className="bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={positionFilter}
            onChange={handlePositionChange}
            aria-label="Filter by position"
          >
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={teamFilter}
            onChange={handleTeamChange}
            aria-label="Filter by team"
          >
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={priceFilter}
            onChange={handlePriceChange}
            aria-label="Filter by price"
          >
            {priceRanges.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search players..."
            className="bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search players"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 text-left">Player</th>
              <th className="p-3 text-left border-r border-white">Price</th>
              <th
                className="p-3 cursor-pointer hover:bg-gray-700 transition-colors text-center"
                onClick={() => sortBy('pointsPerMatch')}
                aria-label="Sort by points per match"
              >
                <span className="flex items-center justify-center">
                  Pts/Match
                  <span
                    className={`pl-1 text-xs ${
                      sortConfig?.key === 'pointsPerMatch' ? 'text-white' : 'text-white'
                    }`}
                  >
                    {getSortArrow('pointsPerMatch')}
                  </span>
                </span>
              </th>
              <th
                className="p-3 cursor-pointer hover:bg-gray-700 transition-colors text-center"
                onClick={() => sortBy('selectedPercentage')}
                aria-label="Sort by selected percentage"
              >
                <span className="flex items-center justify-center">
                  Selected
                  <span
                    className={`pl-1 text-xs ${
                      sortConfig?.key === 'selectedPercentage' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {getSortArrow('selectedPercentage')}
                  </span>
                </span>
              </th>
              <th
                className="p-3 cursor-pointer hover:bg-gray-700 transition-colors text-center"
                onClick={() => sortBy('goals')}
                aria-label="Sort by goals"
              >
                <span className="flex items-center justify-center">
                  Goals
                  <span
                    className={`pl-1 text-xs ${
                      sortConfig?.key === 'goals' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {getSortArrow('goals')}
                  </span>
                </span>
              </th>
              <th
                className="p-3 cursor-pointer hover:bg-gray-700 transition-colors text-center"
                onClick={() => sortBy('assists')}
                aria-label="Sort by assists"
              >
                <span className="flex items-center justify-center">
                  Assists
                  <span
                    className={`pl-1 text-xs ${
                      sortConfig?.key === 'assists' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {getSortArrow('assists')}
                  </span>
                </span>
              </th>
              <th
                className="p-3 cursor-pointer hover:bg-gray-700 transition-colors text-center"
                onClick={() => sortBy('minutesPlayed')}
                aria-label="Sort by minutes played"
              >
                <span className="flex items-center justify-center">
                  Mins. Played
                  <span
                    className={`pl-1 text-xs ${
                      sortConfig?.key === 'minutesPlayed' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {getSortArrow('minutesPlayed')}
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPlayers.map((player, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                <td className="p-3 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <div>
                    <p className="text-sm">{player.name}</p>
                    <p className="text-gray-400 text-xs">
                      {player.team} | {player.position}
                    </p>
                  </div>
                </td>
                <td className="p-3 border-r border-white">{player.price}</td>
                <td className="p-3 text-center">{player.pointsPerMatch}</td>
                <td className="p-3 text-center">{player.selectedPercentage}%</td>
                <td className="p-3 text-center">{player.goals}</td>
                <td className="p-3 text-center">{player.assists}</td>
                <td className="p-3 text-center">{player.minutesPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;