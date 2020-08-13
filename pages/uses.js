import React from "react";
import Page from "../components/Page";
import uses from '../data/uses.json';
import "../styles/uses.scss";

const Uses = () => (
  <Page pageName='uses'>
    <p>I often</p>
    <ul className='uses-list'>
      <li>list</li>
    </ul>
  </Page>
);

export default Uses;
