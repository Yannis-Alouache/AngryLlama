import {
  Container,
  Row,
  Col,
  Image,
  Button
} from "react-bootstrap";
import React, { useState } from 'react';
import MyNavbar from './Components/Navbar'
import HeroBanner from './Components/HeroBanner';

import logo from './Assets/Images/logo.png';
import GallerySection from "./Components/GallerySection";
import UniqueSection from "./Components/UniqueSection";
import MintSection from "./Components/MintSection";


function App() {

  return (
    <>
      {/* Page Wrapper */}
      <div className="w-100 h-100 relative">
        {/* bg */}
        <div className="bg"></div>

        <MyNavbar />
        <HeroBanner />
        <GallerySection />
        <UniqueSection />
        <MintSection />

      </div>

      <footer class="py-5 bg-black">
        <Container>
        <Row>
          <div class="col-12 col-md">
            <img width={36} height={36} src={logo}></img>
          </div>
        </Row>
        </Container >
      </footer>
    </>
  );
}

export default App;
