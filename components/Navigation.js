import Link from 'next/link'
import list from '../data/navigation.json'
import Container from '../formats/Container'

const HomeTitle = () => (
	<div className="nav-title">
		<Link href="/"><a className="nav-link" title="Home">Bill Castillo</a></Link>

		<style jsx>{`
			.nav-link {
				color: #504766;
				font-size: 16px;
				letter-spacing: 0.050em;
				text-transform: uppercase;
				text-decoration: none;
				font-weight: 700;
			}

			.nav-link:hover {
				color: #8587f0;
			}
		`}</style>
	</div>
);

const Navigation = props => (
	<nav>
		<Container>
			<div className="nav-wrapper">
				{!props.homepage ? <HomeTitle /> : ''}
				<ul>{
					list.map((links, index) => {
						return (
							<li key={index} ><Link href={links.link}><a className="nav-link">{links.name}</a></Link></li>
						)
					})
				}</ul>
			</div>
		</Container>

		<style jsx>{`
			nav {
				display: block;
				position: relative;
				width: 100%;
				padding: 24px 0;
				margin-bottom: 96px;
				// padding: 48px 0 60px 0;
				text-align: center;
				background-color: #FFEEDD;
			}

			nav .nav-wrapper {
				display: flex;
				justify-content: ${!props.homepage ? 'space-between' : 'flex-end'};
			}

			nav .nav-link {
				color: #504766;
				font-size: 16px;
				letter-spacing: 0.050em;
				text-transform: uppercase;
				text-decoration: none;
				font-weight: 700;
			}

			nav .nav-link:hover {
				color: #8587f0;
			}

			nav ul {
				list-style-type: none;
			}

			nav ul li {
				display: inline-block;
			}

			nav ul li:not(:last-child) {
				margin-right: 48px;
			}

			@media screen and (min-width: 545px) {
				nav {
					text-align: right;
				}
			}
		`}</style>
	</nav>
);

export default Navigation