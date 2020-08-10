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
                        <Card.Text>24/7 Gym Access</Card.Text>
                       
                        <Card.Text>Free 14 day Trial with a trainer</Card.Text>
                      
                        <Card.Text>Digital Fitness Program</Card.Text>

                        <Card.Text>Group Exercise Classes</Card.Text>
                
                        <div className="mt-5">
                            <Button variant="danger btn-radius">Sign Up</Button>{' '}
                        </div>
                    </Card.ImgOverlay>
            </Card>
        
    )
};

export default cardUI;
