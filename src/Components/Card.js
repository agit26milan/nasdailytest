import React from 'react'
import { Row, Col } from 'react-bootstrap'
const CardComponent = (props) => {
  const { data } = props
  return (
    <div className='card'>
      <a href={data.url} target='_blank'>
        <h4 className='title'>{data && data.title} </h4>

      </a>
      <Row>
        <Col>
          <p>Score: {data && data.score} </p>

        </Col>
        <Col>
          <p>By: {(data && data.by) || 'Unknown'} </p>

        </Col>
        <Col>
          <p>Comments: {(data && data.kids && data.kids.length) || 0} </p>

        </Col>
      </Row>
    </div>
  )
}

export default CardComponent
