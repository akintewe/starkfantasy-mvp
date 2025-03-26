import { Player } from "@/data/mockMarketData";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ selectedPlayer }: { selectedPlayer: Player }) => {
	return (
		<div className="h-[200px] sm:h-[190px] flex justify-center items-center">
			{(() => {
				const stats = [
					selectedPlayer.goals * 2,
					selectedPlayer.assists * 2,
					selectedPlayer.shooting ?? 8,
					selectedPlayer.dribbling ?? 7,
					selectedPlayer.speed ?? 9,
				];
				const maxStat = Math.max(...stats);
				const dynamicMax = Math.ceil(maxStat * 1.1);
				return (
					<Radar
						data={{
							labels: ["Goals", "Assists", "Shooting", "Dribbling", "Speed"],
							datasets: [
								{
									label: "Performance",
									data: stats,
									backgroundColor: "#FF69004D",
									borderColor: "#F54900",
									borderWidth: 2,
									pointRadius: 0,
								},
							],
						}}
						options={{
							maintainAspectRatio: false,
							scales: {
								r: {
									angleLines: {
										color: "rgba(255, 255, 255, 0.2)",
									},
									grid: {
										color: "rgba(255, 255, 255, 0.2)",
									},
									pointLabels: {
										font: {
											size: 14,
											family: "'Arial', sans-serif",
											weight: "bold",
										},
										color: "#F97316",
									},
									ticks: {
										display: false,
									},
									min: 0,
									max: dynamicMax,
								},
							},
							plugins: {
								legend: {
									display: false,
								},
								tooltip: {
									enabled: true,
								},
							},
						}}
					/>
				);
			})()}
		</div>
	);
};

export default RadarChart;
