import { useState, useEffect } from "react";
// import "./App.css";
import Header from "./components/Header";
import "./index.css";
import NotesList from "./components/NotesList";

export type NoteType = {
	id: number;
	title: string;
	description: string;
	doesMatchSearch: boolean;
	bgColor: string;
};

function App() {
	function generateColor() {
		const colors = [
			"bg-yellow-100",
			// "bg-lime-100",
			// "bg-green-100",
			"bg-emerald-100",
			"bg-teal-100",
			// "bg-purple-100",
			"bg-fuchsia-100",
			"bg-rose-100",
		];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}
	const [notes, setNotes] = useState([
		{
			id: Date.now(),
			title: "",
			description: "",
			doesMatchSearch: true,
			bgColor: generateColor(),
		} as NoteType,
	]);

	const [searchText, setSearchText] = useState("");

	// componentDidMount() fires when the component is first mounted
	// componentDidUpdate() fires whenever state changes
	// can replace these with useEffect

	// after rendering for the first time, if saved notes data exists, read from local storage and pass that data to setNotes
	useEffect(() => {
		const savedNotes = localStorage.getItem("notes");
		if (savedNotes) {
			setNotes(JSON.parse(savedNotes));
		}
	}, []);

	// after every render, save notes data to local storage
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<div className="h-screen m-8 flex flex-col gap-5">
			<Header
				searchText={searchText}
				setSearchText={setSearchText}
				// numNotes={numNotes}
				// setNumNotes={setNumNotes}
				setNotes={setNotes}
				generateColor={generateColor}
			/>
			<NotesList notes={notes} setNotes={setNotes} searchText={searchText} />
		</div>
	);
}

export default App;
