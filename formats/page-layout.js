/* Main layout for each pages
 * This component includes navigation by default
 * Set ${noNavigation} to true to remove nav */

import Navigation from "../components/Navigation";

const Footer = () => {
	return (
		<footer>
			<div></div>
			<div>
				<h2>Bill Castillo</h2>
				<p>Copyright {new Date().getFullYear()}</p>
			</div>

			<style jsx>{`
				footer {
					position: relative;
				}
			`}</style>
		</footer>
	);
}

const PageLayout = props => {
	return (
		<>
			<div className={`wrapper ${props.class ? props.class : ''}`}
					 id={`${props.id ? props.id : ''}`} >
					{ props.noNavigation ? '' : <Navigation homepage={props.homepage} /> }
					{ props.children }
			</div>
		</>
	);
}

export default PageLayout