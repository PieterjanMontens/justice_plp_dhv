import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SubscribePageTemplate from '../components/SubscribePageTemplate'
import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

const SubscribePage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SubscribePageTemplate
        title={post.frontmatter.title}
        subtitle={post.frontmatter.subtitle}
        meta_title={post.frontmatter.meta_title}
        meta_description={post.frontmatter.meta_description}
        contentComponent={HTMLContent}
        content={post.html}
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
      html
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
