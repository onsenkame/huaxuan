import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const Process = (props) => {
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
      title: "Zhongli",
      img: "/img/huaxuanimg/v2/Fanarts/zhongli.jpg",
      small: { backgroundImage: "url(/img/huaxuanimg/PixelSquares/zhongli-sm.jpg)" },
      alt: "Digital Art of Zhong Li from the game Genshin Impact, by HuaXuan",
      link: "/process-zl"
    },
    {
      id: 2,
      title: "Dan Heng IL",
      img: "/img/huaxuanimg/v2/Fanarts/DHIL.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/dhil_sm.jpg)"},
      alt: "Digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan",
      link: "/process-dh"
    },
      {
        id: 3,
        title: "Hollow",
        img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/holl-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
        link: "/process-hl"
      },
      {
        id: 4,
        title: "Kohaku",
        img: "/img/huaxuanimg/v2/Fanarts/Kohaku.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Kohaku-sm.jpg)"},
        alt: "Digital Art from the movie Spirited Away, by HuaXuan",
        link: "/process-kh"
      },
    ];

  return (
    <main>
      <section className="container">
        <div className="homepage">
          <section className="banner" id="process">
            <Container>
              <Row>
                <Col className="fanart-banner">
                  <div className="banner-text center">
                    <h1 className="banner-text">Process</h1>
                    <h2 className="banner-textsm">
                      Demostrations of the process of creation
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row className="rowpad">
                {portPics.map((art) => (
                  <Col xs={6} md={6} xl={6} key={art.id} className="colpad">
                    <div
                      className="portfolio-effect-container blur-load"
                      style={art.small}
                    >
                      <Link to={art.link}>
                      <img
                        src={art.img}
                        className="img-fluid square portfolio-effect"
                        alt={"Responsive image" + art.alt}
                        loading="lazy"
                      />
                      </Link>
                    </div>
                  </Col>
                ))}
                <Col xs={12} md={12} xl={12}></Col>
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

export default connect(mapState)(Process);
