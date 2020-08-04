import Link from 'next/link'
import list from '../data/navigation.json'
import Container from '../formats/Container'

export default () => (
	<nav>
		<Container>
			<ul>{
				list.map((links, index) => {
					return (
						<li key={index}><Link href={links.link}><a>{links.name}</a></Link></li>
					)
				})
			}</ul>
		</Container>

		<style jsx>{`
			nav {
				display: block;
				position: relative;
				width: 100%;
				padding: 48px 0 60px 0;
				text-align: center;
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

			nav ul li a {
				color: #504766;
				font-size: 16px;
				letter-spacing: 0.050em;
				text-transform: uppercase;
				text-decoration: none;
				font-weight: 700;
			}

			nav ul li a:hover {
				color: #8587f0;
			}

			@media screen and (min-width: 545px) {
				nav {
					text-align: right;
				}
			}
		`}</style>
	</nav>
);
