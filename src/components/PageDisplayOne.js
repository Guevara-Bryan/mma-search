import logo from "../images/logo.png";

const PageDisplayOne = ({ page }) => {
	return (
		<button
			onClick={() => {
				window.location.href = page.url;
			}}
			className="page-display-one button-effect"
		>
			<h1
				style={{
					textOverflow: "ellipsis",
					overflow: "hidden",
					whiteSpace: "nowrap",
					maxWidth: "100%",
				}}
			>
				{page.title}
			</h1>
			<img style={{ width: "150px" }} src={logo} alt="" />
			<p
				style={{
					textOverflow: "ellipsis",
					overflow: "hidden",
					maxHeight: "80%",
					maxWidth: "100%",
				}}
			>
				{page.content}
			</p>
		</button>
	);
};

export default PageDisplayOne;
