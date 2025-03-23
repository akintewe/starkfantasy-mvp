import Table from "./leagues/components/Table";
import { playersData } from "@/data/mockTableData";
import bg from "../../public/icons/leagueBg.png";
const Test = () => {
	return (
		<main
			className=" min-h-[100vh] flex flex-col py-[50px] px-4 md:px-[200px]"
			style={{
				backgroundImage: `url(${bg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="">
				<Table players={playersData} />
			</div>
		</main>
	);
};

export default Test;
