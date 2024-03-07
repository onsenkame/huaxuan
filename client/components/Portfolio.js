import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const Portfolio = (props) => {
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

  const fanPics = [
      {
        id: 1,
        title: "Totoro and Ducks",
        img: "/img/huaxuanimg/v2/Fanarts/totoro_ducks.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/totoro_sq.jpg)"},
        alt: "Digital Art of Totoro and Ducks from My Neighbor Totoro, by HuaXuan"
      },
      {
        id: 2,
        title: "Fern",
        img: "/img/huaxuanimg/v2/Fanarts/Fern.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Fern_sq.jpg)"},
        alt: "Digital Art of Fern from Frieren, by HuaXuan"
      },
      {
        id: 3,
        title: "Toji",
        img: "/img/huaxuanimg/v2/Fanarts/Toji.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Toji_sq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 4,
        title: "Dan Heng IL",
        img: "/img/huaxuanimg/v2/Fanarts/DHIL.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/dhil_sm.jpg)"},
        alt: "Digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan"
      },
      {
        id: 5,
        title: "Mob",
        img: "/img/huaxuanimg/v2/Fanarts/Mob.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/MobSq.jpg)"},
        alt: "Digital Art inspired by the anime Mob Psycho, by HuaXuan",
      },
      {
        id: 6,
        title: "Kohaku",
        img: "/img/huaxuanimg/v2/Fanarts/Kohaku.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Kohaku-sm.jpg)"},
        alt: "Digital Art of Kohaku from the anime Spirited Away, by HuaXuan"
      },
      {
        id: 7,
        title: "March 7th Bridal",
        img: "/img/huaxuanimg/v2/Fanarts/march.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/march_sm.jpg)"},
        alt: "Digital Art of March 7th from the game Honkai Star Rail, by HuaXuan"
      },
      {
        id: 8,
        title: "Enkidu",
        img: "/img/huaxuanimg/v2/Fanarts/Enkidu.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Enkidu_small.jpg)"},
        alt: "Digital Art of Enkidu from the game Fate: Grand Order, by HuaXuan"
      },
      {
        id: 9,
        title: "Daki and Gyutaro",
        img: "/img/huaxuanimg/v2/Fanarts/KnYDakiandGyutaro.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/KnYDakiand Gyutaro_small.jpg)"},
        alt: "Digital Art of Daki and Gyutaro from the anime Kimetsu no Yaiba, by HuaXuan",
      },
      {
        id: 10,
        title: "Freedom",
        img: "/img/huaxuanimg/v2/Originals/Freedom.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/FreedomSq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 11,
        title: "Zhongli",
        img: "/img/huaxuanimg/v2/Fanarts/zhongli.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/zhongli-sm.jpg)"},
        alt: "Digital Art of Zhong Li from the game Genshin Impact, by HuaXuan",
      },
      {
        id: 12,
        title: "Kafka",
        img: "/img/huaxuanimg/v2/Fanarts/HSRKafka.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/hsrk_sm.jpg)"},
        alt: "Digital Art of Kafka from the game Honkai Star Rail, by HuaXuan"
      },
    ];

    const orgPics = [
      {
        id: 1,
        title: "Temp",
        img: "/img/huaxuanimg/v2/Originals/temp.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/temp_sq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 2,
        title: "Lunar New Year",
        img: "/img/huaxuanimg/v2/Originals/LNY.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/LNY_sq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 3,
        title: "Water",
        img: "/img/huaxuanimg/v2/Originals/Water.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/water_sq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 4,
        title: "Nostalgia",
        img: "/img/huaxuanimg/v2/Originals/Nostalgia.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/temp_sq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 5,
        title: "Celenia",
        img: "/img/huaxuanimg/v2/Originals/Celenia.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Celenia_small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 6,
        title: "Letter",
        img: "/img/huaxuanimg/v2/Originals/Letter.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Letter_small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 7,
        title: "Cenenia 1K",
        img: "/img/huaxuanimg/v2/Originals/Celenia1k.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Celenia 1k_small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 8,
        title: "Companion",
        img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/comp-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 9,
        title: "Wonder",
        img: "/img/huaxuanimg/v2/Originals/Wonder 9.19.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/wond-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 10,
        title: "Hollow",
        img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/holl-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 11,
        title: "Festival",
        img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/fes-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 12,
        title: "Lost",
        img: "/img/huaxuanimg/v2/Originals/Lost 2022 11.24.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/lost-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
    ];

  return (
    <main>
      <section className="container">
        <div className="homepage">
          <section className="banner" id="portfolio">
            <Container>
              <Row>
                <Col className="fanart-banner">
                  <div className="banner-text center">
                    <h1 className="banner-text">Portfolio: Originals</h1>
                  </div>
                </Col>
              </Row>
              <Row className="rowpad">
                {orgPics.map((art) => (
                  <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                    <div
                      className="portfolio-effect-container blur-load"
                      style={art.small}
                    >
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
                <Col xs={12} md={12} xl={12}></Col>
              </Row>
              <Row>
                <Col className="fanart-banner">
                  <div className="banner-text center">
                    <h1 className="banner-text">Portfolio: Fan Arts</h1>
                  </div>
                </Col>
              </Row>
              <Row className="rowpad">
                {fanPics.map((art) => (
                  <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                    <div
                      className="portfolio-effect-container blur-load"
                      style={art.small}
                    >
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

export default connect(mapState)(Portfolio);
