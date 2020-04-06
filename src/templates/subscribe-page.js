import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SubscribePageTemplate from '../components/SubscribePageTemplate'
import Layout from '../components/Layout'

const SubscribePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SubscribePageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
    </Layout>
  )
}

SubscribePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SubscribePage

export const SubscribePageQuery = graphql`
  query SubscribePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        heading
      }
    }
  }
`
