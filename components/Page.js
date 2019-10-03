/* Higher Order Component to layout pages */

import React from 'react'
import Head from './head'
import Container from '../formats/Container'
import PageLayout from '../formats/page-layout'
import { capitalize } from 'lodash'

const Page = props => (
	<PageLayout
		noNavigation={props.noNavigation}
		id={props.pageName}
		class={`${props.pageName}-wrapper`} >

		{ props.import ? '' : <Head title={capitalize(props.pageName)} /> }

		<Container>
			<section className={`section ${props.pageName}-section`}>
			{ props.import
					? <h2 className="section-title">{props.title ? props.title : props.pageName}</h2>
					: <h1 className="section-title">{props.title ? props.title : props.pageName}</h1> }

			{props.children}
			</section>
		</Container>

		<style jsx>{`
			.section {
				margin-bottom: 128px;
			}
			
			.section .section-title {
				font-size: 32px;
				line-height: 32px;
				text-transform: capitalize;
				margin-bottom: 32px;
			}
		`}</style>
	</PageLayout>
)

export default Page