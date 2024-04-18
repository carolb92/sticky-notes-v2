import Note from "./Note";
import { NoteType } from "../App";

type NotesListProps = {
	notes: NoteType[];
	setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>;
	searchText: string;
};

export default function NotesList({
	notes,
	setNotes,
	searchText,
}: NotesListProps) {
	const notesMatchingSearch = notes.map((note) => {
		if (
			note.title.toLowerCase().includes(searchText.toLowerCase()) ||
			note.description.toLowerCase().includes(searchText.toLowerCase())
		) {
			return { ...note, doesMatchSearch: true };
		} else {
			return { ...note, doesMatchSearch: false };
		}
	});

	const filteredNotes = notesMatchingSearch.filter(
		(note) => note.doesMatchSearch
	);
	// setNotes(notesMatchingSearch);

	return (
		<div className="w-full flex flex-wrap gap-4">
			{filteredNotes.map((note) => (
				<Note
					key={note.id}
					id={note.id}
					title={note.title}
					description={note.description}
					doesMatchSearch={note.doesMatchSearch}
					setNotes={setNotes}
					bgColor={note.bgColor}
				/>
			))}
		</div>
	);
}
