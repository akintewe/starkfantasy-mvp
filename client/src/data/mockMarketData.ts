import alisson from "../../public/assets/images/allison.webp";
import courtois from "../../public/assets/images/Thibaut Courtois.webp";
import virgilVanDijk from "../../public/assets/images/Virgil van Dijk.webp";
import rubenDias from "../../public/assets/images/Ruben Dias .webp";
import kevinDeBruyne from "../../public/assets/images/Kevin De Bruyne.webp";
import judeBellingham from "../../public/assets/images/Jude Bellingham.webp";
import lionelMessi from "../../public/assets/images/Lionel Messi.webp";
import kylianMbappe from "../../public/assets/images/Kylian Mbappe.webp";
import erlingHaaland from "../../public/assets/images/Erling Haaland.webp";
import mohamedSalah from "../../public/assets/images/Mohamed Salah.png";

export type Player = {
  name: string;
  team: string;
  position: "GK" | "DEF" | "MID" | "FWD";
  price: number;
  pointsPerMatch: number;
  selectedPercentage: number;
  goals: number;
  assists: number;
  minutesPlayed: number;
  image: string;
  speed: number;
  shooting?: number;
  dribbling?: number;
  bgColor: string;
  stars:number
};

export const playersData: Player[] = [
  {
    name: "Alisson",
    team: "Liverpool",
    position: "GK",
    price: 190,
    pointsPerMatch: 6,
    selectedPercentage: 30,
    goals: 0,
    assists: 1,
    minutesPlayed: 2790,
    image: alisson,
    speed: 50,
    shooting: 80,
    dribbling: 59,
    bgColor: "bg-teal-600",
    stars:4
  },
  {
    name: "Thibaut Courtois",
    team: "Real Madrid",
    position: "GK",
    price: 180,
    pointsPerMatch: 5,
    selectedPercentage: 25,
    goals: 0,
    assists: 5,
    minutesPlayed: 2700,
    image: courtois,
    speed: 65,
    shooting: 60,
    dribbling: 50,
    bgColor: "bg-indigo-700",
    stars:4
  },
  {
    name: "Virgil van Dijk",
    team: "Liverpool",
    position: "DEF",
    price: 220,
    pointsPerMatch: 6,
    selectedPercentage: 38,
    goals: 4,
    assists: 2,
    minutesPlayed: 2430,
    image: virgilVanDijk,
    speed: 70,
    shooting: 60,
    dribbling: 70,
    bgColor: "bg-emerald-600",
    stars:5
  },
  {
    name: "Ruben Dias",
    team: "Man City",
    position: "DEF",
    price: 210,
    pointsPerMatch: 6,
    selectedPercentage: 35,
    goals: 2,
    assists: 3,
    minutesPlayed: 2340,
    image: rubenDias,
    speed: 75,
    shooting: 50,
    dribbling: 65,
    bgColor: "bg-sky-600",
    stars:3
  },
  {
    name: "Kevin De Bruyne",
    team: "Man City",
    position: "MID",
    price: 250,
    pointsPerMatch: 8,
    selectedPercentage: 45,
    goals: 20,
    assists: 32,
    minutesPlayed: 1890,
    image: kevinDeBruyne,
    speed: 75,
    shooting: 90,
    dribbling: 80,
    bgColor: "bg-cyan-600",
    stars:5
  },
  {
    name: "Jude Bellingham",
    team: "Real Madrid",
    position: "MID",
    price: 260,
    pointsPerMatch: 8,
    selectedPercentage: 55,
    goals: 15,
    assists: 28,
    minutesPlayed: 2350,
    image: judeBellingham,
    speed: 80,
    shooting: 82,
    dribbling: 75,
    bgColor: "bg-purple-700",
    stars:4
  },
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    position: "FWD",
    price: 300,
    pointsPerMatch: 12,
    selectedPercentage: 85,
    goals: 32,
    assists: 14,
    minutesPlayed: 2160,
    image: lionelMessi,
    speed: 75,
    shooting: 80,
    dribbling: 99,
    bgColor: "bg-pink-600",
    stars:5
  },
  {
    name: "Kylian Mbappe",
    team: "Real Madrid",
    position: "FWD",
    price: 310,
    pointsPerMatch: 11,
    selectedPercentage: 75,
    goals: 34,
    assists: 12,
    minutesPlayed: 2280,
    image: kylianMbappe,
    speed: 95,
    shooting: 85,
    dribbling: 90,
    bgColor: "bg-rose-600",
    stars:5
  },
  {
    name: "Erling Haaland",
    team: "Man City",
    position: "FWD",
    price: 280,
    pointsPerMatch: 10,
    selectedPercentage: 72,
    goals: 36,
    assists: 10,
    minutesPlayed: 2340,
    image: erlingHaaland,
    speed: 84,
    shooting: 89,
    dribbling: 70,
    bgColor: "bg-amber-600",
    stars:5
  },
  {
    name: "Mohamed Salah",
    team: "Liverpool",
    position: "FWD",
    price: 270,
    pointsPerMatch: 9,
    selectedPercentage: 65,
    goals: 28,
    assists: 12,
    minutesPlayed: 2520,
    image: mohamedSalah,
    speed: 89,
    shooting: 83,
    dribbling: 82,
    bgColor: "bg-red-600",
    stars:5
  },
];