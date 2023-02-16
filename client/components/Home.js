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

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  const fanart = [
    {
      id: 1,
      title: "Power",
      img: "/img/huaxuanimg/v2/Fanarts/CSM Power 11.9.22.jpg",
      alt: "Digital Art of Power from the anime Chainsaw Man, by HuaXuan"
    },
    {
      id: 2,
      title: "Gilgamesh",
      img: "/img/huaxuanimg/v2/Fanarts/FGO Gilgamesh 11x17 (print).jpg",
      alt: "Digital Art of Gligamesh from the game Fate: Grand Order, by HuaXuan"
    },
    {
      id: 3,
      title: "Companion",
      img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 4,
      title: "Reze",
      img: "/img/huaxuanimg/v2/Fanarts/CSM Reze 11.17.22.jpg",
      alt: "Digital Art of Reze from the anime Chainsaw Man, by HuaXuan"
    },
    {
      id: 5,
      title: "Exusiai",
      img: "/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg",
      alt: "Digital Art of Exusiai from the game Arknights, by HuaXuan"
    },
    {
      id: 6,
      title: "Wonder",
      img: "/img/huaxuanimg/v2/Originals/Wonder 9.19.22.jpg",
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 7,
      title: "Lost",
      img: "/img/huaxuanimg/v2/Originals/Lost 2022 11.24.22.jpg",
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 8,
      title: "Hollow",
      img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 9,
      title: "Festival",
      img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
      alt: "Original digital Art, by HuaXuan",
    },
  ];

  const shop = [
    {
      id: 1,
      title: "Stickers",
      img: "/img/huaxuanimg/Shop Pics/Sticker Banner.jpg",
      alt: "Original digital art, by HuaXuan later to be sold in shop",
    },
    {
      id: 2,
      title: "Prints",
      img: "/img/huaxuanimg/Shop Pics/Prints Banner.jpg",
      alt: "Original digital art, by HuaXuan later to be sold in shop",
    },
    {
      id: 3,
      title: "Charms",
      img: "/img/huaxuanimg/Shop Pics/Charm Banner.jpg",
      alt: "Original digital art, by HuaXuan later to be sold in shop",
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
                      <h1 className="banner-text">Portfolio</h1>
                      <h2 className="banner-text">
                        A collection of fanarts and originals
                      </h2>
                    </div>
                  </Col>
                </Row>
                <Row className="rowpad">
                  {fanart.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                      <div className="portfolio-effect-container">
                        <img
                          src={art.img}
                          className="img-fluid square portfolio-effect"
                          alt={"Responsive image" + art.alt}
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
                <Row id="shop" className="space">
                  <Col className="shop-banner banpad">
                    <div className="banner-text center">
                      <h1>Shop</h1>
                      <h2>Work in Progress!</h2>
                    </div>
                  </Col>
                </Row>
                <Row className="rowpad">
                  {shop.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                      <div className="shop-item">
                        <img
                          src={art.img}
                          className="img-fluid square grey-out-layer square-element"
                          alt={"Responsive image" + art.alt}
                        />
                        <h2 className="shop-item-text">{art.title}</h2>
                      </div>
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
                        <h1 className="s-space">About HuaXuan</h1>
                        <p className="center">
                          HuaXuan spends many of their waking hours (few as they
                          might be) <br /> creating original illustrations,
                          coloring and lining webcomics as an assistant, and...{" "}
                          <br /> Asian squatting by their cricut watching
                          stickers being cut.
                          <br />
                          <br />
                          Conventions sold at - Animefest, and many more to
                          come!
                        </p>
                      </Col>
                    </Row>
                    <Row className="center ss-space">
                      <Col>
                        <h1>Contact HuaXuan</h1>
                        <h4>Email them at: rxuanhuang@gmail.com</h4>
                        <h4>
                          Find them on Instagram as{" "}
                          <a
                            href="https://www.instagram.com/hua.xuann/"
                            target="_blank"
                          >
                            hua.xuann
                          </a>{" "}
                        </h4>
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
              <img src={modalImage} className="img-fluid" id="no-right-click" />
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
