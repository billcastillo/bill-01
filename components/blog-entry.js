/*
 * This component is the link for each blog post
 * Contains: title, date, link, description
 */

import Link from "next/link";
import { useRouter } from "next/router";
// import { routeros } from "react-syntax-highlighter/dist/styles/hljs";

const BlogEntry = (props) => {
  const href = `/blog/${props.article.slug}`;
  const { data } = props.article.document;
  const router = useRouter();

  const handleKeypress = (target) => {
    if (target.charCode === 13 || target.charCode === 32) {
      router.push(href);
    }
  }

  const handleClick = () => {
    router.push(href)
  };

  return (
    <Link href={`/blog/[title]`} as={href}>
      <li
        tabIndex="0"
        onKeyPress={handleKeypress}
        onClick={() => handleClick()}
        aria-label={data.title}
        className='blog-entry'
        onMouseEnter={() => {
          router.prefetch(href);
          console.log("prefetching...");
        }}
      >
        <div className='blog-entry-left'>
          <h4 className='blog-entry-title domine'>{data.title}</h4>
          {/* <p className='blog-entry-date'>{data.date}</p> */}
          <p className='blog-entry-desc'>
            {data.description ? data.description : "no desc"}
          </p>
        </div>
        <div className='blog-entry-right'>
          <Link href={`/blog/[title]`} as={href}>
            <a className='read-more'>Read full article</a>
          </Link>
        </div>

        <style jsx>{`
          .blog-entry-link:hover {
            text-decoration: none;
          }

          .blog-entry {
            position: relative;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 24px;
            /* border: 1px solid hsl(193, 30%, 35%); */
            border: 4px solid #FFA5C0;
            border-radius: 12px;
            margin-bottom: 32px;

            transition: all 0.2s ease-in-out;
          }

          .blog-entry:hover {
            cursor: pointer;
            border-color: #FF709B;
            text-decoration: none;
          }

          .blog-entry-left {
            margin-right: 24px;
            margin-bottom: 16px;
          }

          .blog-entry-right {
            align-self: flex-start;
          }

          .blog-entry .blog-entry-date {
            font-size: 12px;
            color: hsl(193, 30%, 35%);
            padding-bottom: 12px;
            letter-spacing: 0.025em;
          }

          .blog-entry .blog-entry-title {
            font-size: 24px;
            font-weight: 300;
            line-height: 32px;
            color: #504766;
            padding-bottom: 8px;
          }

          .blog-entry .blog-entry-desc {
            font-size: 16px;
            color: hsl(193, 30%, 35%);
            letter-spacing: 0;
            line-height: 24px;
          }

          .blog-entry .read-more {
            white-space: nowrap;
            font-size: 14px;
            font-weight: 700;
            line-height: 24px;
            text-align: right;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 0.05em;
          }

          @media screen and (min-width: 545px) {
            .blog-entry .blog-entry-title,
            .blog-entry .blog-entry-desc {
              /* max-width: 80%; */
            }

            .blog-entry .blog-entry-title {
              font-size: 26px;
              line-height: 36px;
            }
          }
        `}</style>
      </li>
    </Link>
  );
};

export default BlogEntry;
