import Search from './Search';
import PageDisplayOne from './PageDisplayOne';
import PageDisplayTwo from './PageDisplayTwo';



const Main = ({ data, dataModifiers}) => {
    const landing = (
        <div className='main-content'>
            <Search data={ data } dataModifiers={ dataModifiers }/>
            
            <div className='page-clips-container'>
                {data.landingClips.map(page => (<PageDisplayOne key={page.id} page={page} />))}
            </div>
        </div>
    );

    const results = (
        <div className='main-content'>
            {
                data.searchResults.length > 0 ? data.searchResults.map(page => (<PageDisplayTwo key={page.id} page={page} />)) : <h1>No results found</h1>
            }
        </div>
    );
    
    if (data.hasResults === true) {
        return results;
    } else {
        return landing;
    }
}

export default Main;