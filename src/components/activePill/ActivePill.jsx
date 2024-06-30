import React from 'react'
import {Badge} from '@patternfly/react-core';
import "./ActivePill.scss"

function ActivePill() {
  return (
    <Badge key={1} screenReaderText="Unread Messages" className='active-pill-container'>
      Home
    </Badge>
  )
}

export default ActivePill