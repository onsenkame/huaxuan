import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const DrawProcessDH = (props) => {
  const { email } = props;
  const { isLoggedIn } = props;
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleSet = (title) => setModalTitle(title);
  const imageSet = (image) => setModalImage(image);

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  const portPics = [
    {
      id: 1,
      title: "Dan Heng IL",
      img: "/img/huaxuanimg/v2/Fanarts/DHIL.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/dhil_sm.jpg)"},
      alt: "Digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan"
    },
    {
      id: 2,
      title: "Dan Heng IL drawing process",
      img: "/img/DHIL.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/dhil_sm.jpg)"},
      alt: "Process of drawing the digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan"
    },
  ];

  return (
    <main>
      <section className="container">
        <div className="homepage">
          <section className="banner">
            <Container>
            <Row className="rowpad">
                <Col className="speed-banner">
                  <div className="banner-text center">
                    <h1 className="banner-text-d">Fanime '24 Individual Art Sample</h1>
                    <h2 className="banner-textsm-d sm-space">
                      Honkai Star Rail - Dan Heng
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row className="rowpad">
                <Col xs={6} md={6} xl={6}>
                  <h2 className="banner-textxsm-d">Illustration</h2>
                </Col>
                <Col xs={6} md={6} xl={6}>
                  <h2 className="banner-textxsm-d">Development Process</h2>
                </Col>
              </Row>
              <Row>
              {portPics.map((art) => (
                  <Col xs={6} md={6} xl={6} key={art.id} className="colpad">
                    <div
                      className="portfolio-effect-container blur-load"
                      style={art.small}
                    >
                      <img
                        src={art.img}
                        className="img-fluid"
                        alt={"Responsive image" + art.alt}
                        loading="lazy"
                        onClick={() => {
                          titleSet(art.title);
                          imageSet(art.img);
                          handleShow();
                        }}
                      />
                    </div>
                  </Col>
              ))}
              </Row>
            </Container>
          </section>
          <Modal size="lg" show={show} onHide={handleClose} centered>
            <img src={modalImage} className="img-fluid" id="no-right-click" />
          </Modal>
        </div>
      </section>
    </main>
  );
};

/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    email: state.auth.email,
    auth: state.auth,
  };
};

export default connect(mapState)(DrawProcessDH);
