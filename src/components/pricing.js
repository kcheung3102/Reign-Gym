import React from 'react';
import { Row, Col } from 'react-bootstrap'
import StyledCard from './cardUI';
import Image1 from '../images/pricing-image1.jpg';
import Image2 from '../images/pricing-image2.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



export default function pricing() {
    return (
        <section className="page-section justify-content-center bg-grey" id="pricing-section">
            <Fade>
            <h2 className="text-center header m-4">Pricing Plan</h2>
            <hr className="divider"></hr>
            </Fade>
            <Row className="justify-content-center align-items-center">
            <div className="mt-5">
                <Col lg={2} md={4} xl={3}>
                <Zoom>
                    <StyledCard imgsrc={Image1} />
                </Zoom>
                </Col>
            </div>
            <div className="mt-5">
                <Col lg={5} md={4} xl={3}>
                <Zoom>
                    <StyledCard imgsrc={Image2} />
                </Zoom>
                </Col>
            </div>
            <div className="mt-5">
                <Col lg={3} md={4} xl={3}>
                <Zoom>
                    <StyledCard imgsrc={Image2} />
                </Zoom>
                </Col>
            </div>
            </Row>
        </section>
    )
}
