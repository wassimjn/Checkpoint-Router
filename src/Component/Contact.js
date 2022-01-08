import React from 'react'
import '../App.css';
import {Button } from 'react-bootstrap';

function Contact() {
    return (
<div className='Contact'>
<section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
   
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form">

                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0 space">
                        <label for="name" className="">Your name</label>
                            <input type="text" id="name" name="name" className="form-control"/>
                            
                        </div>
                    </div>
                    

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0 space">
                        <label for="email" className="">Your email</label>
                            <input type="text" id="email" name="email" className="form-control"/>
                        </div>
                    </div>
                    

                </div>
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0 space">
                        <label for="subject" className="">Subject</label>
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            
                        </div>
                    </div>
                </div>
              
                <div className="row">

                    
                    <div className="col-md-12">

                        <div className="md-form space">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
               

            </form>

            <div className="text-center text-md-left">
            <Button  variant="dark">Send</Button>
            </div>
        </div>
      
        <div className="col-md-3 text-center space">
            <ul className="list-unstyled mb-0 space">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Montfleury ,1008 Tunis</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 216 54 324 591</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>jendoubiwassim96@gmail.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>

        </div>
    )
}

export default Contact
