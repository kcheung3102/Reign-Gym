import React from 'react'
import { Card, Button } from 'react-bootstrap'

const cardUI = props => {
    return (
            <Card className="card text-white text-center" >
                <Card.Img src={props.imgsrc} className="image-style" alt="Card image" />
                <div class="overlay-div"></div>
                    <Card.ImgOverlay>
                        <Card.Title className="text-uppercase">Lorem</Card.Title>
                        <Card.Text>
                            <h2>$20<span className="period">/Month</span></h2>
                        </Card.Text>
                        <hr className="divider-pricing"></hr>
                        <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                       
                        <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                      
                        <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                        
                        <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                        <div className="mt-5">
                            <Button variant="danger btn-radius">Sign Up</Button>{' '}
                        </div>
                    </Card.ImgOverlay>
            </Card>
        
    )
}

export default cardUI;
