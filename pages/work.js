import ProjectEntry from '../components/project-entry'
import Page from '../components/Page'
import projects from '../data/projects.json'
import site from '../data/site.json'

const Work = props => {
	return (
		<Page 
			pageName="work"
			noNavigation={props.noNavigation}
			import={props.import}>

				<div className="work-wrapper">
					<div className="work-brands">
						{site.brands.map((brand, index) => <img className="work-brands-img" key={index} src={`/static/brands/${brand.image}`} alt={brand.name} title={brand.name}/>)}
					</div>

					<h3 className="work-subtitle">Selected works:</h3>
					{props.projects.map((item, index) => <ProjectEntry project={item} key={index} />)}
				</div>

				<style jsx>{`
					.work-subtitle {
						font-size: 20px;
						margin-bottom: 16px;
						color: #504766;
						text-transform: uppercase;
					}

					.work-brands {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: flex-start; // safari fix
						margin-bottom: 64px;
					}

					.work-brands .work-brands-img {
						max-width: 150px;
						margin: 0 24px 24px 0;
						border: 1px solid white;
						border-radius: 8px;
						filter: invert(1);
					}

					@media screen and (min-width: 380px) {
						.work-brands {
							justify-content: flex-start;
						}
					}

					@media screen and (min-width: 545px) {
						.work-brands .work-brands-img {
							max-width: 150px;
						}
					}
				`}</style>

		</Page>
	)
}

Work.getInitialProps = async ({ req }) => {
  return { projects }
}


export default Work