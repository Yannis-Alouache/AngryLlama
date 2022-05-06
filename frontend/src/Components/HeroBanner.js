import {
    Row,
    Container,
    Col,
    Image,
    Button
} from "react-bootstrap";

import heroImage from '../Assets/Images/heroImage.png';


function HeroBanner() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="text-center my-auto" style={{color: "white"}}>
                        <h1 className="font-weight-bold">Collect your favourite Llama</h1>
                        <p className="font-weight-bold">AngryLlama is a free to mint nft collection for everyone !</p>

                        <Button variant="primary" style={{marginRight: "25px"}}>Take a ride</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image
                            src={heroImage}
                            fluid={true}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HeroBanner;