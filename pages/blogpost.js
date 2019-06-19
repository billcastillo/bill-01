/* This page is for the article display for each blog post
 * TODO:
 * - add limit to url links
 */

import React from 'react'
import Markdown from 'react-markdown/with-html';
import { withRouter } from 'next/router';
import matter from 'gray-matter'
import Head from '../components/head';
import CodeBlock from '../components/code-block'
import Navigation from '../components/Navigation';
import Container from '../formats/Container';

const BlogPost = withRouter(props => {
	const { data } = props;

	return (
		<>
			<Head title="owo" />
			<Navigation />

			<Container>
			<div className="blog-wrapper">
				<p className="blog-date">{data.date}</p>
				<h1 className="blog-title">{data.title}</h1>

				<article className="blog-post">
					<Markdown source={props.content} escapeHtml={false} renderers={{code: CodeBlock}}/>
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
						letter-spacing: -0.0250em;
						margin-bottom: 64px;
					}

					.blog-wrapper code {
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
})

BlogPost.getInitialProps = async function({ query }) {
	const content = await require(`../posts/${query.title}/post.md`);
	const data =  matter(content.default);
	
	return data;
}

export default BlogPost