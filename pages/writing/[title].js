// import { useRouter } from 'next/router';
// import Layout from '../../formats/page-layout';

// export default function Post() {
//   const router = useRouter();

//   return (
//     <Layout>
//       <h1>{router.query.title}</h1>
//       <p>This is the blog post content.</p>
//     </Layout>
//   );
// }

import React from 'react'
import Markdown from 'react-markdown/with-html';
import matter from 'gray-matter'
import Head from '../../components/head';
import CodeBlock from '../../components/code-block'
import Navigation from '../../components/Navigation';
import Container from '../../formats/Container';

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
					<h1 className="blog-title">{data.title}</h1>

					<article className="blog-post">
						<Markdown source={content} escapeHtml={false} renderers={{code: CodeBlock}}/>
					</article>

					<style jsx>{`
						.blog-wrapper {
							max-width: 700px;
							margin: 64px auto;
						}

						.blog-wrapper .blog-date {
							color: #B0B0B6;
							font-size: 14px;
							letter-spacing: 0.050em;
							margin-bottom: 8px;
						}

						.blog-wrapper .blog-title {
							color: #504766;
							font-size: 64px;
							font-weight: 400;
							line-height: 1.2;
							margin-bottom: 64px;
						}

						.blog-wrapper pre code {
							display: block;
							font-size: 14px;
						}
					`}</style>
				</div>
				</Container>
			</>
		)
	}

	static async getInitialProps(props) {
		const { query } = props
		const content = await require(`../../posts/${query.title}.md`)
		const data =  matter(content.default)
		console.log('data form blogpost:', data)
		console.log('query:', query)
		return data
	}
}

export default BlogPost