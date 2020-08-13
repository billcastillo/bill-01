/* This component inserts the prop inside a padded container */

const Container = props => (
	<div className="container">
		{ props.children }

		<style jsx>{`
			.container {
				padding-left: 16px;
				padding-right: 16px;
			}

			@media screen and (min-width: 768px) {
				.container {
					max-width: 75vw;
					min-width: 700px;
					margin: 0 auto;
				}
			}

			@media screen and (min-width: 1280px) {
				.container {
					max-width: 60vw;
				}
			}
		`}</style>
	</div>
)

export default Container