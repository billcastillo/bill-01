import React from "react";
import Markdown from "react-markdown/with-html";
import matter from "gray-matter";
import Head from "../../components/head";
import CodeBlock from "../../components/code-block";
import Navigation from "../../components/Navigation";
import Container from "../../formats/Container";
import { formatDate } from "../../helpers/utils";
import "../../styles/blog.scss";

const BlogImage = (props) => (
  <div className='blog-image'>
    <img src={`/static/images/${props.src}`} />
  </div>
);

const generateLink = (slug) => {
  return React.createElement("a", {
    key: Math.random(),
    href: `#${slug}`,
    className: "blog-heading-link",
  });
};

const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const HeadingRenderer = (props) => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, "");
  const slug = text.toLowerCase().replace(/\W/g, "-");

  // Add a link
  props.children.unshift(generateLink(slug));

  return React.createElement("h" + props.level, { id: slug }, props.children);
};

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content, data } = this.props;

    return (
      <>
        <Head title={data.title} />

        <div className='blog-bg'>
          <svg
            width='100%'
            viewBox='0 0 1439 743'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M552.112 292.494C345.956 337.41 100.617 329.529 0 237.36V0H1439V698.632C1439 752.383 1188.24 817.244 1082.17 495.225C976.095 173.206 805.163 237.36 552.112 292.494Z' />
          </svg>
          {/* <svg width="100%" viewBox="0 0 1440 743" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M552.496 292.494C346.196 337.41 100.687 329.529 0 237.36V0H1440V698.632C1440 752.383 1189.07 817.244 1082.92 495.225C976.773 173.206 805.723 237.36 552.496 292.494Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="693.5" gradientUnits="userSpaceOnUse">
                <stop offset="0.0200602" stopColor="#461034"/>
                <stop offset="1" stopColor="#551400"/>
              </linearGradient>
            </defs>
          </svg> */}
        </div>

        <Navigation />

        <Container className='blog-container'>
          <div className='blog-wrapper'>
            <div className='blog-meta'>
              <h1 className='blog-title poppins'>{data.title}</h1>
              <p className='blog-date'>{formatDate(data.date)}</p>
            </div>

            {data.image ? <BlogImage src={data.image} /> : ""}

            <article className='blog-post'>
              <Markdown
                source={content}
                escapeHtml={false}
                renderers={{ code: CodeBlock, heading: HeadingRenderer }}
              />
            </article>
          </div>

          <style jsx>{`
            .blog-container {
              margin-top: 48px;
            }
          `}</style>
        </Container>
      </>
    );
  }

  static async getInitialProps(props) {
    const { query } = props;
    const content = await require(`../../posts/${query.title}.md`);
    const data = matter(content.default);
    return data;
  }
}

export default BlogPost;
