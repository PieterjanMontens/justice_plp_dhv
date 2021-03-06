import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Share from '../Share'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
}) => (
  <div>
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
                <Link className="call_to_action"to='/subscribe'>Inscription Appel à Contribution / Inschrijving Call to Contribution</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <Share
                    title="L'Open Source pour soutenir l'informatisation de la Justice / Open Source om de digitalisatie van Justitie te steunen"
                    slug="/"
                    excerpt="Wie kan Justitie digitaliseren? Wie mag ? - Qui sait informatiser la Justice ? Qui le peut ?"
                  />
                  <h3 className='has-text-weight-semibold is-size-2' style={{ martinTop:0 }}>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                { /*
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

export default HomePageTemplate
