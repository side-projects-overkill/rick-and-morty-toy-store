import "./InactivePill.scss"
import {Badge} from '@patternfly/react-core';
import React from 'react'

function InactivePill({content}) {
  return (
    <Badge key={1} screenReaderText="Unread Messages" className='inactive-pill-container'>
      {content}
    </Badge>
  )
}

export default InactivePill