import {
    Row,
    Container,
    Col,
    Image,
} from "react-bootstrap";

import lamaUnique from '../Assets/Images/lamaUnique.png'

function UniqueSection() {

    return (
        <>
            <section className="pt-5">
                <Container>
                    <Row>
                        <Col className="text-center align-self-center">
                            <Image
                                src={lamaUnique}
                                fluid="true"
                            />
                        </Col>

                        <Col className="text-center my-auto">
                            <h1 className="text-center">Each Llama is 100% UNIQUE</h1>

                            <p>
                                They have different properties more or less difficult to drop : weapons, mask, eye color etc.&nbsp;
                                Have fun minting AngryLlama and don’t forget, even the most common ones can become rarer with added attributes… STAY TUNED FOR MORE !
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default UniqueSection;