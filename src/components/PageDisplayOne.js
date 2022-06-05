import logo from '../images/logo.png';

const PageDisplayOne = ({ page }) => {
    return (
        <button onClick={ () => { window.location.href = page.url } } className='page-display-one button-effect'>
            <h1>{page.title}</h1>
            <img style={{width: "150px"}} src={logo} alt="cool mma image" />
            <p>{page.content}</p>
        </button>
    );
}

export default PageDisplayOne;
