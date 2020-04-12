import React from 'react'
import Layout from '../../../components/Layout'
import { Link } from 'gatsby'

const SuccessPage = () => {
  return (
    <Layout>
      <section className='hero is-primary is-bold is-large'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>
            Merci ! Bedankt !
          </h1>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-half has-text-centered'>
              <Link className="button" to='/'>Retour page d'accueil / Terug naar de Homepagina</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessPage
