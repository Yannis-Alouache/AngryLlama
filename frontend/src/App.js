import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button
} from "react-bootstrap";

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
import avatar from './Assets/Images/avatar.png'


function App() {
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
        {/* <Container>
          <h1 className="text-center pt-5">The Team</h1>
          <p className="text-center">Take a look at the team of the Llama</p>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container> */}
      </section>

    </div>
      {/* End Page Wrapper */}
    </>
  );
}

export default App;
