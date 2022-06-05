import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/App.css";

import { useState } from "react";



function App() {
	const [landingClips, setLandingClips] = useState(
		[
            {
                id: 1,
                title: 'Cool MMA Page',
                content: 'This is the very cool stuff that this page is talking about. You won\'t believe what it is. Click it for more info',
                url: 'https://www.google.com/',
            }, 
            {
                id: 2,
                title: 'Cool MMA Page',
                content: 'This is the very cool stuff that this page is talking about. You won\'t believe what it is. Click it for more info',
                url: 'https://www.google.com/',
            }, 
            {
                id: 3,
                title: 'Cool MMA Page',
                content: 'This is the very cool stuff that this page is talking about. You won\'t believe what it is. Click it for more info',
                url: 'https://www.google.com/',
            }, 
        ]
	);
	
	const [searchResults, setSearchResults] = useState([]);

	const [hasResults, setHasResults] = useState(false);

	return (
		<div className="container">
			<Header data={ {landingClips, searchResults, hasResults} } dataModifiers={ {setLandingClips, setSearchResults, setHasResults} } />
			<Main data={ {landingClips, searchResults, hasResults} } dataModifiers={ {setLandingClips, setSearchResults, setHasResults} } />
			<Footer />
		</div>
	);
}

export default App;
