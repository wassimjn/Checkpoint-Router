import React from 'react'
import {Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import '../App.css'

function SerieDescription({series}) {
  const {id}=useParams()
  const navigate= useNavigate()
  const found =series.find(el=>el.id== id)
    return (
        <div className="description_card">
      <Card style={{ width: '18rem' }}>
      <iframe width="289" height="215"
       src={found.trailer}
        title="YouTube video player" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      <Card.Body>
      <Card.Title>{found.title}</Card.Title>
      <Card.Text>
        {found.description}
       </Card.Text>
       </Card.Body>
  
       <Card.Body>
       <Button onClick={()=>navigate(-1)}>go back</Button>
      
       </Card.Body>
       </Card>
      
        </div>
    )
    
}
export default SerieDescription