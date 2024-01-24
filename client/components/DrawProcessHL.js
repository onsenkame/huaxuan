import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const DrawProcessHL = (props) => {
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
      title: "Hollow",
      img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/holl-small.jpg)"},
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 2,
      title: "Hollow",
      img: "/img/huaxuanimg/HollowDeconstructed.JPG",
      small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/holl-small.jpg)"},
      alt: "Original digital Art, by HuaXuan",
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
                    <h1 className="banner-textsm">Fanime '23 Individual Art Sample</h1>
                    <h2 className="banner-textxsm">
                      Hollow
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row className="rowpad">
                <Col xs={6} md={6} xl={6}>
                  <h2>Illustration</h2>
                </Col>
                <Col xs={6} md={6} xl={6}>
                  <h2>Development File</h2>
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
                        className="img-fluid process-aspect"
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

export default connect(mapState)(DrawProcessHL);
