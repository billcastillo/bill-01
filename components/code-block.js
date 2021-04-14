import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import powershell from "react-syntax-highlighter/dist/cjs/languages/prism/powershell";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import git from "react-syntax-highlighter/dist/cjs/languages/prism/git";
import shell from "react-syntax-highlighter/dist/cjs/languages/prism/shell-session";
// import json from "react-syntax-highlighter/dist/cjs/languages/prism/json5";
// import { darcula } from "react-syntax-highlighter/dist/styles/prism";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("powershell", powershell);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("git", git);
SyntaxHighlighter.registerLanguage("shell", shell);
// SyntaxHighlighter.registerLanguage("json", json);

const getProperLangValues = (lang) => {
  if (lang === 'js') {
    return 'javascript'
  }

  return lang;
}

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const { language, value } = this.props;

    return (
      <div className="blog-code-container">
        <div className="blog-code-lang font-mono" aria-label="Document language">{getProperLangValues(language)}</div>
        <SyntaxHighlighter language={language} style={materialOceanic} showLineNumbers={true} codeTagProps={{className: 'blog-code'}}>
          {value}
        </SyntaxHighlighter>

        <style jsx>{`
          .blog-code-container {
            position: relative;
            margin: 2.5em 0;
          }
          .blog-code-lang {
            position: absolute;
            top: -12px;
            right: 15px;
            width: auto;
            height: auto;
            font-size: 14px;
            padding: 8px 12px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            color: rgb(195, 206, 227);
            background-color: rgb(38, 50, 56);
            z-index: 2;
          }

          @media screen and (min-width: 545px) {
            .blog-code-container {
              margin: 48px 0;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default CodeBlock;
