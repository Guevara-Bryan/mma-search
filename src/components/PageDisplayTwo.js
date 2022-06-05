import PropTypes from 'prop-types';
import '../styles/effects.css';

const PageDisplayTwo = ({ page }) => {
    return (
        <button onClick={() => { window.location.href = page.url }} className='page-display-two highlight-effect'>
            <div className='page-display-two-header'>
                <h3>{page.title.length < 120 ? page.title : page.title.substring(0, 120)+ '...'} </h3>    
                <a href={page.url} target='_self'>{
                    page.url.length < 120 ? page.url : page.url.substring(0, 120) + '...'
                }</a>  
            </div>
            <p>{page.content}</p>
        </button>
    );
}


PageDisplayTwo.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    action: PropTypes.func,
}

export default PageDisplayTwo;
