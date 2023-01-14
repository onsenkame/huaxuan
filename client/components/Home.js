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
      title: "Power",
      img: "/img/huaxuanimg/v2/Fanarts/CSM Power 11.9.22.jpg",
    },
    {
      id: 2,
      title: "Gilgamesh",
      img: "/img/huaxuanimg/v2/Fanarts/FGO Gilgamesh 11x17 (print).jpg",
    },
    {
      id: 3,
      title: "Companion",
      img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
    },
    {
      id: 4,
      title: "Reze",
      img: "/img/huaxuanimg/v2/Fanarts/CSM Reze 11.17.22.jpg",
    },
    {
      id: 5,
      title: "Exusiai",
      img: "/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg",
    },
    {
      id: 6,
      title: "Wonder",
      img: "/img/huaxuanimg/v2/Originals/Wonder 9.19.22.jpg",
    },
    {
      id: 7,
      title: "Lost",
      img: "/img/huaxuanimg/v2/Originals/Lost 2022 11.24.22.jpg",
    },
    {
      id: 8,
      title: "Hollow",
      img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
    },
    {
      id: 9,
      title: "Festival",
      img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
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
            <section className="banner" id="portfolio">
              <Container>
                <Row>
                  <Col className="fanart-banner">
                    <div className="banner-text center">
                      <h1>Portfolio</h1>
                      <h2>A collection of works</h2>
                    </div>
                  </Col>
                </Row>
                <Row className="rowpad">
                  {fanart.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
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
                  <Col className="shop-banner banpad">
                    <div className="banner-text center">
                      <h1>Shop</h1>
                      <h2>Coming soon!</h2>
                    </div>
                  </Col>
                </Row>
                <Row className="rowpad">
                  {shop.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                      <img
                        src={art.img}
                        className="img-fluid square grey-out-layer "
                        alt="Responsive image"
                      />
                    </Col>
                  ))}
                </Row>
                <Row id="info" className="space">
                  <Col xs={12} md={6} xl={6}>
                    <img
                      src="/img/huaxuanimg/HuaXuanppf.png"
                      className="img-fluid"
                    />
                  </Col>
                  <Col xs={12} md={6} xl={6}>
                    <Row className="center half">
                      <Col>
                        <h1>About Huaxuan</h1>
                        <p className="center">
                          HuaXuan spends many of their waking hours (few as they
                          might be) creating original illustrations, coloring
                          and lining webcomics as an assistant, and Asian
                          squatting by their cricut watching stickers being cut.
                          Conventions sold at - Animefest, and many more to
                          come!
                        </p>
                      </Col>
                    </Row>
                    <Row className="center s-space">
                      <Col>
                        <h1>Contact Huaxuan</h1>
                        <h3>Email them at: rxuanhuang@gmail.com</h3>
                        <h3>
                          Find them on Instagram as{" "}
                          <a href="https://www.instagram.com/hua.xuann/">
                            hua.xuann
                          </a>{" "}
                        </h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row id="contact">
                  <Col xs={12} md={12} xl={12}></Col>
                </Row>
              </Container>
            </section>
            <Modal size="lg" show={show} onHide={handleClose} centered>
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
