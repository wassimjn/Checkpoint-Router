import {Modal,Button,Form} from "react-bootstrap"
import React, { useState } from 'react';
import Rating from "./Rating";
function Edit({ seriedata ,setSeriedata,titre,descrip,url,rate,id}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [title,setTitle]=useState(titre)
    const [discription,setDiscritipionn]=useState(descrip)
    const [path,setPath]=useState(url)
    const [rating,setRating]=useState(rate)

     const edit=(id, newmovie)=>{  setSeriedata(seriedata.map(el=>el.id===id ? {
         ...el, ...newmovie} : el)) }
    return(
        <div>
     <Button variant="dark" onClick={handleShow}>
        Edit Serie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Serie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e)=> setTitle(e.target.value)} value={title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Discription</Form.Label>
           
            <Form.Control as="textarea" rows={3} placeholder="Enter Discription" onChange={(e)=> setDiscritipionn(e.target.value)}  value={discription} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="text" placeholder="Enter the path" onChange={(e)=> setPath(e.target.value)} value={path} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Rating rating={rating} setRating={setRating}/>
            </Form.Group>
        </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="success" onClick={()=> {  edit(id, {title,posterUrl:path,rate:rating,description:discription});  handleClose() }}>
            Edit
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>

    )
}

export default Edit