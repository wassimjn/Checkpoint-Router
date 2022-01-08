import { Card , ListGroup , Button  } from "react-bootstrap";
import Edit from "./Edit";
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'

import SerieDescription from "./SerieDescription";




function SerieCard({el,setSeriedata , seriedata}) {
  
    return(
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterUrl} />
      <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
        {el.description}
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ReactStars
          count={5}
          value={el.rate}
          size={24}
          activeColor="#ffd700"
          edit={false}        
        />
      </ListGroup>
      <Card.Body>
      <Link to={`/SerieDescription/${el.id}`}>Serie Description</Link>     
      <Edit tite={el.title} descrip={el.description} url={el.posterUrl} rate={el.rate}  id={el.id}   seriedata={seriedata} setSeriedata={setSeriedata} ></Edit>
      </Card.Body>
      </Card>
    </div>
    )
}
export default SerieCard ;