import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button
} from "react-bootstrap";
import React, { useState } from 'react';
import MyNavbar from './Components/Navbar'
import HeroBanner from './Components/HeroBanner';

import a from './Assets/Images/gallery/a.png';
import b from './Assets/Images/gallery/b.png';
import c from './Assets/Images/gallery/c.png';
import d from './Assets/Images/gallery/d.png';
import e from './Assets/Images/gallery/e.png';
import f from './Assets/Images/gallery/f.png';
import g from './Assets/Images/gallery/g.png';
import h from './Assets/Images/gallery/h.png';
import logo from './Assets/Images/logo.png';
import lamaMint from './Assets/Images/lamaMint.png'
import lamaUnique from './Assets/Images/lamaUnique.png'
// import avatar from './Assets/Images/avatar.png'


function App() {

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
    {/* Page Wrapper */}
    <div className="w-100 h-100 relative">
      {/* bg */}
      <div className="bg"></div>

      <MyNavbar />
      <HeroBanner />

      <section>
        <h1 className="text-center pt-5">We are AngryLlama</h1>
        <p className="text-center">AngryLlama is an nft collection of 1000 UNIQUE Llama</p>
        <br></br>
        <Container>
          <Row>
            <Col>
              <Image
                src={a}
                fluid="false"
                rounded={true}
              />
            </Col>
            <Col>
              <Image
                src={b}
                fluid="false"
                rounded={true}
              />
            </Col>
            <Col>
              <Image
                src={c}
                fluid="false"
                rounded={true}
              />
            </Col>
            <Col>
              <Image
                src={d}
                fluid="false"
                rounded={true}
              />
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Image
                src={e}
                fluid="false"
                rounded={true}
              />
            </Col>
            <Col>
              <Image
                src={f}
                fluid="false"
                rounded={true}
              />
            </Col>
            <Col>
              <Image
                src={g}
                fluid="false"
                rounded={true}
              />
            </Col>
            <Col>
              <Image
                src={h}
                fluid="false"
                rounded={true}
              />
            </Col>
          </Row>
        </Container>
      </section>


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
                They have different properties more or less difficult to drop : weapons, mask, eye color etc. <br></br>
                Some properties give you access to unique privileges such as a $100,000 giveaway !<br></br>
                Have fun minting AngryLlama and don’t forget, even the most common ones can become rarer with added attributes… STAY TUNED FOR MORE !
              </p>
            </Col>

          </Row>
        </Container>
      </section>


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

      {/* <section className="pt-5">
      <Container>
        <Card className="text-center p-3 team-card-bg">
        <Card.Title>Meet the team</Card.Title>
          <Card.Img src={avatar} className="w-10 rounded-max mx-auto"/>
          <Card.Body>
            <Card.Text className="">
              Yannis is a junior developper, that is passionate with the blockchain technology and the web in general.<br></br>
              He also love Llama !
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
      </section> */}
    </div>
    <footer class="py-5 bg-black">
      <div className="container">
      <div class="row">
        <div class="col-12 col-md">
          <img width={36} height={36} src={logo}></img>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Cool stuff</a></li>
            <li><a class="text-muted" href="#">Random feature</a></li>
            <li><a class="text-muted" href="#">Team feature</a></li>
            <li><a class="text-muted" href="#">Stuff for developers</a></li>
            <li><a class="text-muted" href="#">Another one</a></li>
            <li><a class="text-muted" href="#">Last time</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Resource</a></li>
            <li><a class="text-muted" href="#">Resource name</a></li>
            <li><a class="text-muted" href="#">Another resource</a></li>
            <li><a class="text-muted" href="#">Final resource</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Business</a></li>
            <li><a class="text-muted" href="#">Education</a></li>
            <li><a class="text-muted" href="#">Government</a></li>
            <li><a class="text-muted" href="#">Gaming</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="#">Team</a></li>
            <li><a class="text-muted" href="#">Locations</a></li>
            <li><a class="text-muted" href="#">Privacy</a></li>
            <li><a class="text-muted" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
      {/* End Page Wrapper */}
    </>
  );
}

export default App;
