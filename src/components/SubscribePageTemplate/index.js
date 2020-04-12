import React from 'react'
import Helmet from 'react-helmet'
import Content from '../Content'
import PropTypes from 'prop-types'
import { SubscribeForm } from '../forms'

const SubscribePageTemplate = ({ title, subtitle, content, contentComponent, meta_title, meta_description }) => {
  const PageContent = contentComponent || Content


  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
                <h2 className='subtitle'>
                  {subtitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <PageContent className='content' content={ content } />
            </div>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </section>
  </div>
}

SubscribePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default SubscribePageTemplate
