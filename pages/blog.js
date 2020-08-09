import React from 'react'
import Page from '../components/Page'
import BlogEntry from '../components/blog-entry'
import BlogList from '../api/blog-list'
import '../styles/blog.scss'

class Blog extends React.Component {
	static async getInitialProps() {
		return BlogList();
	}
	
	render() {
		return (
			<Page
				pageName="articles"
				noNavigation={this.props.noNavigation}
				import={this.props.import}>
				<ul className="blog-entry-wrapper">{
					this.props.posts.map((article, index) => {
						return (
							<BlogEntry key={index} article={article} />
						)
					})
				}</ul>
			</Page>
		)
	}
}

export default Blog