import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/App.css";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [landingClips, setLandingClips] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [hasResults, setHasResults] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [searchCount, setSearchCount] = useState(5);

	function getRandomQuery() {
		const terms = ["fight", "ufc", "octagon", "compete", "event"];
		const randomIndex = Math.floor(Math.random() * terms.length);

		return terms[randomIndex];
	}

	async function fetchClips() {
		try {
			const data = await axios.post(process.env.REACT_APP_ENDPOINT, {
				query: `${getRandomQuery()}`,
				count: 3,
			});
			setLandingClips(data.data);
		} catch (err) {
            console.log(err);
		}
	}

	useEffect(() => {
		fetchClips();
	}, []);

	return (
		<div className="container">
			<Header
				data={{
					searchCount,
					searchQuery,
					landingClips,
					searchResults,
					hasResults,
				}}
				dataModifiers={{
					setSearchCount,
					setSearchQuery,
					setLandingClips,
					setSearchResults,
					setHasResults,
				}}
			/>
			<Main
				data={{
					searchCount,
					searchQuery,
					landingClips,
					searchResults,
					hasResults,
				}}
				dataModifiers={{
					setSearchCount,
					setSearchQuery,
					setLandingClips,
					setSearchResults,
					setHasResults,
				}}
			/>
			<Footer />
		</div>
	);
}

export default App;
