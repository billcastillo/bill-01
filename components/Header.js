import Container from "../formats/Container";


const Header = () => (
	<header className="section header-wrapper">
		<Container>
			<div className="header-name">
				<h1>Mememe Nbobobo</h1>
			</div>
		</Container>

		<style jsx>{`
			.header-name {
				margin-bottom: 24px;
			}
		`}</style>

	</header>

)

export default Header