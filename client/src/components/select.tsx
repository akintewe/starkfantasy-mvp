/* eslint-disable @typescript-eslint/no-explicit-any */
import arrowDown from "../../public/icons/arrowDown.svg";

const Select = ({
	label,
	value,
	onChange,
	data,
}: {
	label?: string;
	value: string;
	onChange: any;
	data: any;
}) => {
	return (
		<div className="flex flex-col w-full">
			{label && (
				<label className="text-gray-300 text-base font-medium mb-1 text-center">
					Position
				</label>
			)}
			<div className=" relative">
				<select
					className="appearance-none w-full md:w-[205px] bg-indigo-900 text-white text-[14px] font-medium py-[10px] px-[15px] rounded-[8px] focus:outline-none focus:ring-1 focus:transparent"
					value={value}
					onChange={onChange}
					aria-label="Filter by position"
				>
					{data?.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
				<span className="absolute pointer-events-none right-3  top-1/2 transform -translate-y-1/2 text-white">
					<img src={arrowDown} alt="Dropdown arrow" />
				</span>
			</div>
		</div>
	);
};

export default Select;
