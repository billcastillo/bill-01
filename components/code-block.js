import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import powershell from "react-syntax-highlighter/dist/cjs/languages/prism/powershell";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
// import { darcula } from "react-syntax-highlighter/dist/styles/prism";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("powershell", powershell);
SyntaxHighlighter.registerLanguage("css", css);

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
		const { language, value } = this.props;

    return (
      <SyntaxHighlighter language={language} style={materialOceanic}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;