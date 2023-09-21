import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";

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
      small: {backgroundImage: "url(/img/huaxuanimg/v2/Fanarts/powe-small.jpg)"},
      alt: "Digital Art of Power from the anime Chainsaw Man, by HuaXuan"
    },
    {
      id: 2,
      title: "Gilgamesh",
      img: "/img/huaxuanimg/v2/Fanarts/FGO Gilgamesh 11x17 (print).jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/v2/Fanarts/gil-small.jpg)"},
      alt: "Digital Art of Gligamesh from the game Fate: Grand Order, by HuaXuan"
    },
    {
      id: 3,
      title: "Companion",
      img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/v2/Originals/comp-small.jpg)"},
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 4,
      title: "Dan Heng IL",
      img: "/img/huaxuanimg/Art Profile Pics/DHIL.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/dhil_sm.jpg)"},
      alt: "Digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan"
    },
    {
      id: 5,
      title: "Daki and Gyutaro",
      img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/KnYDakiandGyutaro.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/KnYDakiand Gyutaro_small.jpg)"},
      alt: "Digital Art of Daki and Gyutaro from the anime Kimetsu no Yaiba, by HuaXuan",
    },
    {
      id: 6,
      title: "Hololive Suisei",
      img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/HololiveSuisei.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/HololiveSuisei_small.jpg)"},
      alt: "Digital Art of vtuber Hoshimachi Suisei from Hololive, by HuaXuan"
    },
    {
      id: 7,
      title: "Lost",
      img: "/img/huaxuanimg/v2/Originals/Lost 2022 11.24.22.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/v2/Originals/lost-small.jpg)"},
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 8,
      title: "Hollow",
      img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/v2/Originals/holl-small.jpg)"},
      alt: "Original digital Art, by HuaXuan",
    },
    {
      id: 9,
      title: "Festival",
      img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/v2/Originals/fes-small.jpg)"},
      alt: "Original digital Art, by HuaXuan",
    },
  ];

  const shop = [
    {
      id: 1,
      title: "Stickers",
      img: "/img/huaxuanimg/Shop Pics/Sticker-sq.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/Shop Pics/stik-small.jpg)"},
      alt: "Original digital art, by HuaXuan later to be sold in shop",
    },
    {
      id: 2,
      title: "Prints",
      img: "/img/huaxuanimg/Shop Pics/Prints-sq.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/Shop Pics/print-small.jpg)"},
      alt: "Original digital art, by HuaXuan later to be sold in shop",
    },
    {
      id: 3,
      title: "Charms",
      img: "/img/huaxuanimg/Shop Pics/Charm-sq.jpg",
      small: {backgroundImage: "url(/img/huaxuanimg/Shop Pics/charm-small.jpg)"},
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
                  <Nav className="fanart-banner" as={Link} to="/portfolio">
                    <div className="banner-text center">
                      <h1 className="banner-text">Portfolio</h1>
                      <h2 className="banner-text">
                        A collection of fanarts and originals
                      </h2>
                    </div>
                  </Nav>
                </Row>
                <Row className="rowpad">
                  {fanart.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                      <div className="portfolio-effect-container blur-load" style={art.small}>
                        <img
                          src={art.img}
                          className="img-fluid square portfolio-effect"
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
                      <div className="shop-item blur-load" style={art.small}>
                        <img
                          src={art.img}
                          className="img-fluid square grey-out-layer square-element"
                          alt={"Responsive image" + art.alt}
                          loading="lazy"
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
                          Conventions sold at - UCSD Animefest, Triton Gaming Expo, various SF Mini Art Marts, YumeCon and many more to come!
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
