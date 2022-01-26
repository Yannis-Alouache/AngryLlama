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
                        <p className="font-weight-bold">Lorem Ipsum is Lorem Ipsum, Lorem Ipsum and Lorem Ipsum</p>

                        <Button variant="primary" style={{marginRight: "25px"}}>Take a ride</Button>
                        <Button variant="secondary">View on OpenSea</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image
                            src={heroImage}
                            width="700px"
                            height="700px"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HeroBanner;