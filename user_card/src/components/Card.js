import React from 'react'
import { Collapse } from 'reactstrap'

const Card = ({ follower, expand, handleExpand }) => {
  console.log(expand);
  return (
    <>
      <h3 id={follower.id} onClick={e => handleExpand(e)}>{follower.login}</h3>
      <Collapse isOpen={expand ? true : false}>
        <img src={follower.avatar_url} />
      </Collapse>
    </>
  )
}

export default Card
