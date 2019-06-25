/* This page is for the article display for each blog post
 * TODO:
 * - add limit to url links
 */

import React from 'react'
import Markdown from 'react-markdown/with-html';
import matter from 'gray-matter'
import Head from '../components/head';
import CodeBlock from '../components/code-block'
import Navigation from '../components/Navigation';
import Container from '../formats/Container';

class BlogPost extends React.Component {
	static async getInitialProps(props) {
		const { query } = props;
		const content = await import(`../posts/${query.title}.md`);
		const data =  matter(content.default);
		return data
	}

	constructor(props) {
		super(props);
	}

	render() {
		const { content, data } = this.props;

		return (
			<>
				<Head title="owo" />
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
}

// const BlogPost = props => {
// 	const { data } = props;

// 	return (
// 		<>
// 			<Head title="owo" />
// 			<Navigation />

// 			<Container>
// 			<div className="blog-wrapper">
// 				<p className="blog-date">{data.date}</p>
// 				<h1 className="blog-title">{data.title}</h1>

// 				<article className="blog-post">
// 					<Markdown source={props.content} escapeHtml={false} renderers={{code: CodeBlock}}/>
// 				</article>

// 				<style jsx>{`
// 					.blog-wrapper {
// 						max-width: 700px;
// 						margin: 64px auto;
// 					}

// 					.blog-wrapper .blog-date {
// 						color: #B0B0B6;
// 						font-size: 14px;
// 						letter-spacing: 0.050em;
// 						margin-bottom: 8px;
// 					}

// 					.blog-wrapper .blog-title {
// 						color: #504766;
// 						font-size: 64px;
// 						font-weight: 400;
// 						line-height: 1.2;
// 						letter-spacing: -0.0250em;
// 						margin-bottom: 64px;
// 					}

// 					.blog-wrapper code {
// 					}

// 					.blog-wrapper pre code {
// 						display: block;
// 						font-size: 14px;
// 					}
// 				`}</style>
// 			</div>
// 			</Container>
// 		</>
		
// 	)
// }

// BlogPost.getInitialProps = async function({ query }) {
// 	const content = await import(`../posts/${query.title}.md`);
// 	const data =  matter(content.default);

	// const posts = (ctx => {
	// 	console.log('ctx:', ctx)
	// 	const keys = ctx.keys()
	// 	keys.forEach(noob => {
	// 		console.log('noob:', noob);
	// 	})
	// 	console.log('ctx keys:', keys)

	// 	const values = keys.map(ctx)
	// 	console.log('values:', values);

	// 	const dataFilter = keys.filter(key => key.includes(query.title))
	// 	console.log('data filter:', dataFilter);
	// 	const data = keys.map((key, index) => {
	// 		const newKey = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.')
	// 		console.log('ey boy', newKey === query.title);
	// 		if (newKey === query.title) {
	// 			console.log('current key:', key);
	// 			const value = values[index];
	// 			console.log('check value:', value);
	// 			const document = matter(value.default)

	// 			const slug = query.title //key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.')
	// 			console.log('here it is:', { document, slug })
	// 			return { document, slug }
	// 		}
	// 	})
	// 	console.log('data:', data);

	// 	return data
	// })(require.context(`../posts`, false, /\.md$/))

	// console.log('posts last:', posts)


	// const posts = (ctx => {
	// 	console.log('ctx:', ctx)
	// 	console.log('ctx keys:', ctx.keys())
	// 	const keys = ctx.keys()
	// 	const values = keys.map(ctx)
	// 	const data = keys.map((key, index) => {
	// 		const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.')
	// 		const value = values[index]
	// 		console.log('slug:', slug)
	// 		console.log('valuez:', values)
	// 		console.log('value:', value)
	// 	})
	// 	return data;
	// })(require.context(`../posts`, false, /\.md$/))
	// console.log('posts:', posts)

	// return data

	// const posts = (ctx => {
	// 	const keys = ctx.keys();
	// 	const values = keys.map(ctx);
	// 	const data = keys.map((key, index) => {
	// 			// Create slug from filename
	// 			const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
	// 			const value = values[index];
	// 			// Parse document
	// 			const document = matter(value);
	// 			console.log('document:', document);
	// 			return {
	// 					document,
	// 					slug
	// 			};
	// 	});
	// 	return data;
	// })(require.context(`../posts/${query.title}`, true, /\.md$/));
	// return {
	// 		posts
	// };
// }

export default BlogPost