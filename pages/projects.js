import Link from 'next/link'
import ProjectEntry from '../components/project-entry'
import Page from '../components/Page'

const Projects = props => {
	const { projects } = props

	return (
		<Page 
		pageName="works"
		noNavigation={props.noNavigation}
		import={props.import}>

			<div className="projects-wrapper">{
				projects.map((project, index) => <ProjectEntry project={project} key={index} />)
			}</div>

		</Page>
	)
}


export default Projects