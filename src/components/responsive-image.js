import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FSResponsiveImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
`

const ResponsiveImage = props => {
  return <FSResponsiveImage {...props} />
}

ResponsiveImage.propTypes = {
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  borderRadius: PropTypes.string
}

ResponsiveImage.defaultProps = {
  width: '100%',
  height: 'auto',
  padding: '0',
  margin: '0',
  borderRadius: '0'
}

export default ResponsiveImage
