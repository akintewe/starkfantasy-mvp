import Table from "./leagues/components/Table";
import { playersData } from "@/data/mockTableData";
import bg from "../../public/icons/leagueBg.png";
import Market from "./dashboard/leagueDetails/market";
const Demo = () => {
	return (
		<main
			className=" min-h-[100vh] flex flex-col py-[50px] px-4"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className=" flex flex-col gap-5">
				<Market />
				<Table players={playersData} />
			</div>
		</main>
	);
};

export default Demo;
