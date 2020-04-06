import React from 'react'
import PropTypes from 'prop-types'
import SubscribePageTemplate from '../../components/SubscribePageTemplate'

const SubscribePagePreview = ({ entry, getAsset }) => {
  return (
    <SubscribePageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  )
}

SubscribePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default SubscribePagePreview
