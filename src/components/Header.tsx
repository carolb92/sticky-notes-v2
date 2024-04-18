import { NoteType } from "../App";

type HeaderProps = {
	searchText: string;
	setSearchText: (searchText: string) => void;
	// numNotes: number;
	// setNumNotes: React.Dispatch<React.SetStateAction<number>>;
	setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
	generateColor: () => string;
};

export default function Header({
	searchText,
	setSearchText,
	// setNumNotes,
	// numNotes,
	setNotes,
	generateColor,
}: HeaderProps) {
	function handleClick() {
		console.log("clicked");
		setNotes((prevNotes: NoteType[]) => [
			...prevNotes,
			{
				id: Date.now(),
				title: "",
				description: "",
				doesMatchSearch: true,
				bgColor: generateColor(),
			} as NoteType,
		]);
	}

	return (
		<div>
			<h1 className="font-semibold text-4xl mb-4 text-slate-700">
				Sticky Notes
			</h1>
			<div className="flex gap-4">
				<button
					className="border-2 border-slate-600 text-slate-600 p-2 rounded-md font-semibold hover:bg-slate-300"
					onClick={handleClick}
				>
					+ New Note
				</button>
				<input
					type="text"
					placeholder="Type to search..."
					className="border border-black rounded-md p-2 focus:outline-none focus:border-none focus:ring focus:ring-slate-300"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>
		</div>
	);
}
