import React from 'react'
import App from 'next/app'
import '../styles/style.scss'
import Fonts from '../components/Fonts'

class MyApp extends App {
	componentDidMount () {
    Fonts()
	}

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp;
