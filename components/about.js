import Head from '../components/head'
import PageLayout from "../formats/page-layout";
import Container from "../formats/Container";

import site from '../data/site.json'


const About = () => (
	<>
		<section className="section about-section" id="about">
			<div className="about-bg"></div>
			<Container>
			<h2 className="about-desc">
				{site.about}
			</h2>
			</Container>
		</section>

		<style jsx>{`
			.section {
				margin-bottom: 64px;
			}
			.about-section {
				position: relative;
				display: flex;
				align-items: center;
				height: ${typeof window !== 'undefined' ? window.innerHeight * 0.80 + 'px' : '80vh'}
			}

			.about-section .about-bg {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: url(../static/about_me_bg.png);
				background-repeat: no-repeat;
				background-size: auto 100%;
				background-position: center center;
				opacity: 0.50;
				z-index: -1;
			}

			.about-section .about-desc {
				color: #504766;
				font-size: 32px;
				line-height: 40px;
				text-align: center;
			}
		`}</style>
	</>
)

export default About