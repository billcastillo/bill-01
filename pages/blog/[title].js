import React from 'react'
import Markdown from 'react-markdown/with-html';
import matter from 'gray-matter'
import Head from '../../components/head';
import CodeBlock from '../../components/code-block'
import Navigation from '../../components/Navigation';
import Container from '../../formats/Container';
import '../../styles/blog.scss';

class BlogPost extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { content, data } = this.props;

		return (
			<>
				<Head title={data.title} />
				<Navigation />

				<Container>
				<div className="blog-wrapper">
					<p className="blog-date">{data.date}</p>
					<h1 className="blog-title domine">{data.title}</h1>

					<article className="blog-post">
						<Markdown source={content} escapeHtml={false} renderers={{code: CodeBlock}}/>
					</article>
				</div>
				</Container>
			</>
		)
	}

	static async getInitialProps(props) {
		const { query } = props
		const content = await require(`../../posts/${query.title}.md`)
		const data =  matter(content.default)
		return data
	}
}

export default BlogPost