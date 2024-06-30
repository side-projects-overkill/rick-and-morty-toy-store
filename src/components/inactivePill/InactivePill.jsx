import "./InactivePill.scss"
import {Badge} from '@patternfly/react-core';
import React from 'react'

function InactivePill() {
  return (
    <Badge key={1} screenReaderText="Unread Messages" className='inactive-pill-container'>
      Home
    </Badge>
  )
}

export default InactivePill