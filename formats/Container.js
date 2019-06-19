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
					max-width: 50vw;
					min-width: 700px;
					margin: 0 auto;
					padding-left: 32px;
					padding-right: 32px;
				}
			}

			@media screen and (min-width: 1280px) {
				.container {
					padding-left: 88px;
					padding-right: 88px;
				}
			}

			@media screen and (min-width: 1440px) {
				.container {
					padding-left: 120px;
					padding-right: 120px;
				}
			}
		`}</style>
	</div>
)

export default Container