import Header from "@/components/header/page";
import WelcomePage from "./components/WelcomePage";
import Footer from "@/components/footer";
import Table from "./leagues/components/table";

const playersData = [
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
	},
	{
		name: "Kevin De Bruyne",
		team: "Man City",
		position: "MID",
		price: 250,
		pointsPerMatch: 8,
		selectedPercentage: 45,
		goals: 8,
		assists: 28,
		minutesPlayed: 1890,
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
	},
	{
		name: "Thibaut Courtois",
		team: "Real Madrid", 
		position: "GK",
		price: 180,
		pointsPerMatch: 5,
		selectedPercentage: 25,
		goals: 0,
		assists: 0,
		minutesPlayed: 2700,
	},
	{
		name: "Erling Haaland",
		team: "Man City",
		position: "FWD",
		price: 280,
		pointsPerMatch: 10,
		selectedPercentage: 72,
		goals: 36,
		assists: 8,
		minutesPlayed: 2340,
	}
];
export default function Page() {
	return (
		<>
			<Header />
			<WelcomePage />
			<Footer />
			<Table players={playersData} />
		</>
	);
}
