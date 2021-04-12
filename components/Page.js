/* Higher Order Component to layout pages */

import React from 'react'
import Head from './head'
import Container from '../formats/Container'
import PageLayout from '../formats/page-layout'
import { capitalize } from 'lodash'

const Page = (props) => (
  <PageLayout
    noNavigation={props.noNavigation}
    id={props.pageName}
    class={`${props.pageName}-wrapper`}
  >
    {props.import ? "" : <Head title={capitalize(props.pageName)} />}

		{/*
			props.bg && props.bg === 'blob-bg' 
				?
					(
						<>
							<div className="blog-bg-blob left">
								<svg width="auto" height="100%" viewBox="0 0 300 900" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M215.013 188.482C315.423 -16.6402 169.154 0.342906 0 0.342833V900H300C300 820.986 215.013 768.408 133.849 715.442C52.6853 662.477 79.3786 465.562 215.013 188.482Z" fill="#FFA5C0"/>
								</svg>
							</div>

							<div className="blog-bg-blob right">
								<svg width="auto" height="100%" viewBox="0 0 300 900" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M47.0656 300.831C-20.9779 231.486 -20.9779 129.213 85.0761 0H300V900H124.495C129.813 847.783 120.553 826.962 215.532 746.341C334.256 645.565 115.109 370.177 47.0656 300.831Z" fill="#FFA5C0"/>
								</svg>
							</div>
						</>
					)
				: ''
		*/}

    <Container>
      <section className={`section ${props.pageName}-section`}>
        {props.import ? (
          <h2 className='section-title poppins'>
            {props.title ? props.title : props.pageName}
          </h2>
        ) : (
          <h1 className='section-title poppins'>
            {props.title ? props.title : props.pageName}
          </h1>
        )}

        {props.children}
      </section>
    </Container>

    <style jsx>{`
			.blog-bg-blob {
				position: fixed;
				top: 0;
				bottom: 0;
				z-index: -1;
			}

			.blog-bg-blob.left {
				left: 0;
			}

			.blog-bg-blob.right {
				right: 0;
			}

      .section {
        margin-bottom: 96px;
      }

      .section .section-title {
        text-transform: uppercase;
        margin-bottom: 32px;
      }

      .section h1.section-title {
        font-size: 46px;
        line-height: 52px;
      }

      .section h2.section-title {
        font-size: 32px;
        line-height: 32px;
      }

      @media screen and (min-width: 545px) {
        .section {
          margin-bottom: 128px;
        }
      }
    `}</style>
  </PageLayout>
);

export default Page