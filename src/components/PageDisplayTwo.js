import PropTypes from "prop-types";
import "../styles/effects.css";

const PageDisplayTwo = ({ page }) => {
	return (
		<button
			onClick={() => {
				window.location.href = page.url;
			}}
			className="page-display-two highlight-effect"
		>
			<div className="page-display-two-header">
				<h3
					style={{
						textOverflow: "ellipsis",
						overflow: "hidden",
						whiteSpace: "nowrap",
						maxWidth: "700px",
					}}
				>
					{page.title}
				</h3>
				<a
					href={page.url}
					target="_self"
					style={{
						textOverflow: "ellipsis",
						overflow: "hidden",
						whiteSpace: "nowrap",
						maxWidth: "700px",
					}}
				>
					{page.url}
				</a>
			</div>
			<p>{page.content}</p>
		</button>
	);
};

PageDisplayTwo.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	url: PropTypes.string,
	image: PropTypes.string,
	action: PropTypes.func,
};

export default PageDisplayTwo;
