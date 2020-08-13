import React from "react";
import Page from "../components/Page";
import BlogEntry from "../components/blog-entry";
import "../styles/uses.scss";

const Uses = (props) => (
  <Page pageName='uses'>
    <p>I often</p>
    <ul className='blog-entry-wrapper'>
      <li>list</li>
    </ul>
  </Page>
);

export default Uses;
