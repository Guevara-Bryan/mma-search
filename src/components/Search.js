import "../styles/effects.css";
import axios from "axios";

const Search = ({ data, dataModifiers }) => {
	function checkQueryInput() {
		if (data.searchQuery.length > 0) {
			return true;
		}
		return false;
	}
	function checkCountInput() {
		if (data.searchCount > 0) {
			return true;
		}
		return false;
	}

	async function queryPostRequest() {
		if (!(checkQueryInput() && checkCountInput())) {
			return;
		}
		try {
			const results = await axios.post(process.env.REACT_APP_ENDPOINT, {
				query: data.searchQuery,
				count: data.searchCount,
			});
			dataModifiers.setSearchResults(results.data);
			dataModifiers.setHasResults(true);
		} catch (err) {
			console.log(err);
		}
	}

	function updateQuery(e) {
		dataModifiers.setSearchQuery(e.target.value);
	}

	function updateCount(e) {
		dataModifiers.setSearchCount(parseInt(e.target.value));
	}

	return (
		<div className="search">
			<input
				className="page-search-query"
				type="text"
				defaultValue={data.searchQuery}
				placeholder="Query"
				onChange={updateQuery}
			/>
			<input
				className="page-search-count"
				type="text"
				defaultValue={data.searchCount}
				placeholder="Count"
				onChange={updateCount}
			/>
			<button className="button-effect" onClick={queryPostRequest}>
				Search
			</button>
		</div>
	);
};

export default Search;
