import React from 'react'
import Page from '../components/Page'
import articles from '../data/articles.json'
import BlogEntry from '../components/blog-entry'
import '../styles/blog.scss'

const Blog = props => (
		<Page 
			pageName="writing"
			noNavigation={props.noNavigation}
			import={props.import}>

				<ul className="blog-entry-wrapper">{
						props.articles.map((article, index) => {
							return (
								<BlogEntry key={index} article={article} />
							)
						})
				}</ul>

		</Page>
)

Blog.getInitialProps = async ({ req }) => {
  return { articles }
}

export default Blog