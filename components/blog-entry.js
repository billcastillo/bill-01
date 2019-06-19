/* This component is the link for each blog post
 * Contains: title, date, link
 */

import Link from 'next/link'
import { kebabCase } from 'lodash'

const BlogEntry = props => {
	const { article } = props
	const link = kebabCase(article.title)

	return (
		<Link as={`/blog/${link}`} href={`/blogpost/${link}`}>
			<li className="blog-entry">
				<div className="blog-entry-left">
					<p className="blog-entry-date">{article.date}</p>
					<h4 className="blog-entry-title poppins">{article.title}</h4>
					<p className="blog-entry-desc">{article.description}</p>
				</div>
				<div className="blog-entry-right">
					<Link as={`/blog/${link}`} href={`/blogpost/${link}`}>
						<a className="read-more">Read more</a>
					</Link>
				</div>

				<style jsx>{`
					.blog-entry {
						position: relative;
						display: flex;
						justify-content: space-between;
						padding: 24px;
						border: 1px solid hsl(193,30%,35%);
						border-radius: 12px;
						margin-bottom: 32px;
					}

					.blog-entry:hover {
						cursor: pointer;
						border-color: #000000;
					}

					.blog-entry-left {
						margin-right: 24px;
					}

					.blog-entry-right {
						align-self: flex-end;
					}

					.blog-entry .blog-entry-date {
						font-size: 14px;
						color: hsl(193,30%,35%);
						margin-bottom: 4px;
						letter-spacing: 0.0250em;
					}

					.blog-entry .blog-entry-title {
						font-size: 22px;
						font-weight: 400;
						line-height: 28px;
						color: #000000;
						padding: 8px 0;
					}

					.blog-entry .blog-entry-desc {
						font-size: 14px;
						color: hsl(193,30%,35%);
						letter-spacing: 0;
						line-height: 20px;
					}

					.blog-entry .read-more {
						white-space: nowrap;
						font-size: 14px;
						font-weight: 700;
						line-height: 24px;
						text-align: right;
						text-transform: uppercase;
						text-decoration: none;
						letter-spacing: 0.050em;
					}
				`}</style>
			</li>
		</Link>
	)
}
	

export default BlogEntry