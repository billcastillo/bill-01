import Link from 'next/link'
import { camelCase } from 'lodash'

const ProjectEntry = props => {	
	const projectId = camelCase(props.project.name)
	
	return (
		<div>
		<a className="projects-tab" id={projectId} href={props.project.link} target="_blank">
			<h4 className="projects-name poppins">{props.project.name}</h4>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
		
			<style jsx>{`
				.projects-tab {
					position: relative;
					display: flex;
					justify-content: space-between;
					align-items: center;
					text-decoration: none;
					border-radius: 12px;
					padding: 24px 16px;
					margin-bottom: 38px;
					box-shadow: 0 4px 4px rgba(0,0,0,0.350);
					overflow: hidden;
					transition: all 0.3s ease-in-out;
				}
				
				.projects-tab#${projectId}::before {
					position: absolute;
					content: '';
					width: 200%;
					height: 100%;
					top: 0;
					left: -100%;
					will-change: transform;
					background: linear-gradient(135deg, ${props.project.color_1} 25%, ${props.project.color_2}, ${props.project.color_1} );
					transition: all 0.3s ease-in-out;
					z-index: -1;
				}

				.projects-tab:hover,
				.projects-tab:active,
				.projects-tab:focus {
					cursor: pointer;
					box-shadow: 0 32px 24px rgba(0,0,0, 0.250)
				}

				.projects-tab:hover::before {
					transform: translate3d(50%, 0, 0);
				}

				.projects-tab:hover svg {
					transform: scale(1.50);
				}

				.projects-tab .projects-name {
					font-size: 22px;
					font-weight: 400;
					color: white;
				}

				.projects-tab svg {
					stroke: white;
					transition: all 0.3s ease-in-out;
				}

				@media screen and (min-width: 545px) {
					.projects-tab {
						margin-bottom: 64px;
						padding: 28px 16px;
					}
				}
			`}</style>
		</a>
		</div>
	)
}
export default ProjectEntry