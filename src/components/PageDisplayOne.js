import logo from '../images/logo.png';

const PageDisplayOne = ({ page }) => {
    return (
        <button onClick={ () => { window.location.href = page.url } } className='page-display-one button-effect'>
            <h1>{page.title.length < 20 ? page.title : page.title.substring(0, 20)+ '...'}</h1>
            <img style={{width: "150px"}} src={logo} alt="cool mma image" />
            <p>{page.content.length < 120 ? page.content : page.content.substring(0, 120)+ '...'}</p>
        </button>
    );
}

export default PageDisplayOne;
