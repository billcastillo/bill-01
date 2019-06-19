/* Main layout for each pages
 * This component includes navigation by default
 * Set ${noNavigation} to true to remove nav */

import Navigation from "../components/Navigation";

const PageLayout = props => {
	return (
		<>
			<div className={`wrapper ${props.class ? props.class : ''}`} id={`${props.id ? props.id : ''}`} >
					{ props.noNavigation ? '' : <Navigation /> }
					{ props.children }
			</div>
		</>
	);
}

export default PageLayout