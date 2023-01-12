import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { email } = props;
  const { isLoggedIn } = props;
  console.log(props.auth);

  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleSet = (title) => setModalTitle(title);
  const imageSet = (image) => setModalImage(image);

  const fanart = [
    {
      id: 1,
      title: "Exusiai",
      img: "/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg",
    },
    {
      id: 2,
      title: "Power",
      img: "/img/huaxuanimg/v2/Fanarts/CSM Power 11.9.22.jpg",
    },
    {
      id: 3,
      title: "Reze",
      img: "/img/huaxuanimg/v2/Fanarts/CSM Reze 11.17.22.jpg",
    },
    {
      id: 4,
      title: "Enkidu",
      img: "/img/huaxuanimg/v2/Fanarts/Enkidu (print).jpg",
    },
    {
      id: 5,
      title: "Faputa",
      img: "/img/huaxuanimg/v2/Fanarts/Made in Abyss Faputa 10.26.22.jpg",
    },
    {
      id: 6,
      title: "Nanachi",
      img: "/img/huaxuanimg/v2/Fanarts/Made in Abyss Nanachi.jpg",
    },
    {
      id: 7,
      title: "Merlins",
      img: "/img/huaxuanimg/v2/Fanarts/Merlins 11x17.jpg",
    },
    {
      id: 8,
      title: "Scarlet",
      img: "/img/huaxuanimg/v2/Fanarts/Scarlet 130k.jpg",
    },
  ];

  const original = [
    {
      id: 1,
      title: "Bad Girl",
      img: "/img/huaxuanimg/v2/Originals/Bad Girl 2022.jpg",
    },
    {
      id: 2,
      title: "Companion",
      img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
    },
    {
      id: 3,
      title: "Festival",
      img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
    },
    {
      id: 4,
      title: "Hollow",
      img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
    },
    {
      id: 5,
      title: "Lost",
      img: "/img/huaxuanimg/v2/Originals/Lost 2022 11.24.22.jpg",
    },
    {
      id: 6,
      title: "Wonder",
      img: "/img/huaxuanimg/v2/Originals/Wonder 9.19.22.jpg",
    },
  ];

  const shop = [
    {
      id: 1,
      title: "Bad Girl",
      img: "/img/huaxuanimg/v2/Originals/Bad Girl 2022.jpg",
    },
    {
      id: 2,
      title: "Companion",
      img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
    },
    {
      id: 3,
      title: "Festival",
      img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
    },
  ];

  return (
    <main>
      <section className="container">
        {isLoggedIn ? (
          <div>
            <h3 className="anchor-container">Welcome, {email}</h3>
          </div>
        ) : (
          <div className="homepage ">
            <section className="banner" id="home">
              <Container>
                <Row className="space">
                  <Col className="fanart-banner">
                    <div className="banner-text center">
                      <h1>Portfolio</h1>
                      <h2>A collection of works</h2>
                    </div>
                  </Col>
                </Row>
                <Row id="fanarts" className="rowpad">
                  {fanart.map((art) => (
                    <Col xs={12} md={6} xl={4} key={art.id} className="colpad">
                      <img
                        src={art.img}
                        className="img-fluid square"
                        alt="Responsive image"
                        onClick={() => {
                          titleSet(art.title);
                          imageSet(art.img);
                          handleShow();
                        }}
                      />
                    </Col>
                  ))}
                </Row>
                <Row id="originals" className="space">
                  <Col className="fanart-banner">
                    <div className="banner-text center">
                      <h1>Originals</h1>
                      <h2>A collection of originals</h2>
                    </div>
                  </Col>
                </Row>
                <Row className="rowpad">
                  {original.map((art) => (
                    <Col xs={12} md={6} xl={4} key={art.id} className="colpad">
                      <img
                        src={art.img}
                        className="img-fluid square"
                        alt="Responsive image"
                        onClick={() => {
                          titleSet(art.title);
                          imageSet(art.img);
                          handleShow();
                        }}
                      />
                    </Col>
                  ))}
                </Row>
                <Row id="shop" className="space">
                  <Col className="fanart-banner">
                    <div className="banner-text center">
                      <h1>Shop</h1>
                      <h2>Coming soon!</h2>
                    </div>
                  </Col>
                </Row>
                <Row className="rowpad">
                  {shop.map((art) => (
                    <Col xs={12} md={6} xl={4} key={art.id} className="colpad">
                      <img
                        src={art.img}
                        className="img-fluid square"
                        alt="Responsive image"
                      />
                    </Col>
                  ))}
                </Row>
                <Row id="info" className="space">
                  <Col xs={12} md={6} xl={6}>
                    <img src="/img/huaxuanimg/logotemp.png" className="img-fluid" />
                  </Col>
                  <Col xs={12} md={6} xl={6}>
                    <h1>About Huaxuan</h1>
                    <p className="center">A collection of fanarts
                    she does things
                    and they are cool so give her your money</p>
                    <h1>Contact Huaxuan</h1>
                    <p className="center">Hit her up at blah blah</p>
                    <p className="center">Find her on <a href="https://www.instagram.com/hua.xuann/">Instagram</a></p>
                  </Col>
                </Row>
                <Row id="contact">
                <Col xs={12} md={12} xl={12}>
                    
                  </Col>
                </Row>
              </Container>
            </section>
            <Modal size="lg" show={show} onHide={handleClose} centered>
              {/* <Modal.Header closeButton>
                <Modal.Title>{modalTitle}</Modal.Title>
              </Modal.Header> */}
              <img src={modalImage} className="img-fluid" />
            </Modal>
          </div>
        )}
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

export default connect(mapState)(Home);
