import Link from 'next/link'
import ProjectEntry from '../components/project-entry'
import Page from '../components/Page'
import projects from '../data/projects.json'

const Projects = props => {
	return (
		<Page 
			pageName="work"
			noNavigation={props.noNavigation}
			import={props.import}>

				<div className="projects-wrapper">{
					props.projects.map((item, index) => <ProjectEntry project={item} key={index} />)
				}</div>

		</Page>
	)
}

Projects.getInitialProps = async ({ req }) => {
  return { projects }
}


export default Projects