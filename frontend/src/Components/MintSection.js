import {
    Row,
    Container,
    Col,
    Image,
    Button
} from "react-bootstrap";
import { useState } from 'react';

import lamaMint from '../Assets/Images/lamaMint.png'

function MintSection() {
    const [nftToMint, setNftToMint] = useState(1)

    const handleMinus = () => {
        if (nftToMint > 1) {
        setNftToMint(nftToMint - 1)
        }
    }

    const handlePlus = () => {
        setNftToMint(nftToMint + 1)
    }

    return (
        <>
            <section className="py-5">
                <Container>
                    <h1 className="text-center">Minting your Llama</h1>
                    <p className="text-center">
                        Here you can mint a Llama for free all you need is a metaMask account and the extension on your browser.<br></br>
                        After the minting you will be the owner of one the angryLlama 
                    </p>

                    <Row>
                        <Col className="text-center align-self-center">
                            <h1 className="float-right">100 / 1000</h1>
                            <br></br>
                            <div class="quantity buttons_added test">
                                <input type="button" value="-" class="minus myButton" onClick={handleMinus}></input>
                                <input type="number" step="1" min="1" max="" name="quantity" value={nftToMint} title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" style={{pointerEvents : "none"}}></input>
                                <input type="button" value="+" class="plus myButton" onClick={handlePlus}></input>
                            </div>

                            <Button className="mt-5 myButton mintBtn">Mint</Button>
                        </Col>

                        <Col>
                            <Image
                                src={lamaMint}
                                fluid="true"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default MintSection;