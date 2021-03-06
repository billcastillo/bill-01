import React from "react";
import NextHead from "next/head";
import site from "../data/site.json";
import { string } from "prop-types";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = (props) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{props.title || ""} | Bill Castillo</title>

    <meta
      name='google-site-verification'
      content='jCosw1Vm8uSI93BTC03a7gGG6d_mqroPa6cSmbBbTLs'
    />

    <meta name='description' content={site.about || defaultDescription} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link rel='icon' sizes='192x192' href='/static/touch-icon.png' />
    <link rel='apple-touch-icon' href='/static/touch-icon.png' />
    <link
      rel='mask-icon'
      href='/static/icons/favicon-mask.svg'
      color='#49B882'
    />
    <link rel='icon' href='/static/icons/favicon.ico' />
    <meta property='og:url' content={props.url || defaultOGURL} />
    <meta property='og:title' content={props.title || ""} />
    <meta
      property='og:description'
      content={site.about || defaultDescription}
    />
    <meta name='twitter:site' content={props.url || defaultOGURL} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={props.ogImage || defaultOGImage} />
    <meta property='og:image' content={props.ogImage || defaultOGImage} />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='630' />

    <meta name='theme-color' content='#FFA5C0' />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
