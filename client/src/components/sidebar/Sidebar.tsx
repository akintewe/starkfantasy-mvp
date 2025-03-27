'use client';
// ICONS
import { TbSoccerField } from "react-icons/tb";
import { MdLeaderboard } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BsLayoutTextWindow } from "react-icons/bs";

import SidebarTab from './components/SidebarTap';
import SidebarHeader from './components/SidebarHeader';

const tabs = [
  { id: 1, title: 'My Team', image: <TbSoccerField />, href: '/dashboard' },
  // { id: 2, title: 'Leaderboard', image: <MdLeaderboard />, href: '/transactions' },
  { id: 2, title: 'Market', image: <SiCoinmarketcap />, href: '/market' },
  // { id: 4, title: 'Results', image: <BsLayoutTextWindow />, href: '/results' },
  { id: 3, title: 'Player Rankings', image: <FaRankingStar />, href: '/rankings' },
  // { id: 6, title: 'History', image: <FaHistory />, href: '/history' },
  // { id: 7, title: 'Settings', image: <IoIosSettings />, href: '/settings' },
];

interface SidebarProps {
  currentImage: string;
  className?: string;
}

export default function Sidebar({ currentImage, className = "" }: SidebarProps) {
  return (
<div className={` h-screen max-w-[58px] bg-neutral-900 shadow-lg hover:max-w-[250px] overflow-hidden transition-all ${className}`}>

      <SidebarHeader imageSrc={currentImage} />
      <div className="flex flex-col mt-4 space-y-2">
        {tabs.map((tab, index) => (
          <SidebarTab key={tab.id} {...tab} isLast={false} />
        ))}
      </div>
    </div>
  );
}
