import { NoteType } from "../App";

type NoteProps = {
	id: number;
	title: string;
	description: string;
	// setNotes: (notes: NoteType[]) => NoteType[];
	setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
	doesMatchSearch: boolean;
	bgColor: string;
};

export default function Note({
	title,
	description,
	setNotes,
	id,
	bgColor,
}: NoteProps) {
	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setNotes((prevNotes: NoteType[]) => {
			return prevNotes.map((note) => {
				if (note.id === id) {
					return { ...note, [name]: value };
				}
				return note;
			});
		});
	}

	function handleDelete() {
		setNotes((prevNotes: NoteType[]) => {
			return prevNotes.filter((note) => note.id !== id);
		});
	}

	return (
		<div className="flex flex-col border-2 border-slate-300 w-60 rounded-md relative">
			<span
				className="absolute top-1 right-2 font-mynerve text-slate-400 cursor-pointer"
				onClick={handleDelete}
			>
				X
			</span>
			<input
				type="text"
				placeholder="Title"
				name="title"
				className={`p-2 border-b border-slate-300 text-lg focus:outline-none font-mynerve ${bgColor}`}
				value={title}
				onChange={handleChange}
			/>
			<textarea
				name="description"
				// cols={26}
				rows={6}
				placeholder={"Description"}
				className={`p-2 focus:outline-none font-mynerve text-lg ${bgColor}`}
				// bg-yellow-100
				value={description}
				onChange={handleChange}
			></textarea>
		</div>
	);
}
