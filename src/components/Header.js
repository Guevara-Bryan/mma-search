import logo from '../images/logo.png';
import Search from './Search';


const Header = ({ data, dataModifiers}) => {
    const goToLandingPage = () => { 
        dataModifiers.setHasResults(false);
    }

    const landing = (
        <div className='section'>
            <button onClick={ goToLandingPage } className='logo-image'>
                <img src={logo} alt='logo' />
            </button>
            <div className='header-text'>
                <h1>MMA Search</h1>
            </div>
        </div>
    );

    const results = (
        <div className='section'>
            <button onClick={ goToLandingPage } className='logo-image'>
                <img src={logo} alt='logo' />
            </button>
            <Search data={data} dataModifiers={dataModifiers}/>
        </div>
    );
    
    if(data.hasResults === true) {
        return results;
    } else {
        return landing;
    }
}

export default Header;