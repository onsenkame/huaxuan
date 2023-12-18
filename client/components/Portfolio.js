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

  const portPics = [
      {
        id: 17,
        title: "Hololive Suisei",
        img: "/img/huaxuanimg/v2/Fanarts/HololiveSuisei.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/HololiveSuisei_small.jpg)"},
        alt: "Digital Art of vtuber Hoshimachi Suisei from Hololive, by HuaXuan"
      },
      {
        id: 13,
        title: "Shinobu",
        img: "/img/huaxuanimg/v2/Fanarts/Shinobu.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/ShinobuSq.jpg)"},
        alt: "Digital Art of Shinobu from the anime Demon Slayer, by HuaXuan"
      },
      {
        id: 24,
        title: "Freedom",
        img: "/img/huaxuanimg/v2/Originals/Freedom.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/FreedomSq.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 8,
        title: "Hollow",
        img: "/img/huaxuanimg/v2/Originals/Hollow 9.16.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/holl-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 16,
        title: "Dan Heng IL",
        img: "/img/huaxuanimg/v2/Fanarts/DHIL.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/dhil_sm.jpg)"},
        alt: "Digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan"
      },
      {
        id: 12,
        title: "Mob",
        img: "/img/huaxuanimg/v2/Fanarts/Mob.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/MobSq.jpg)"},
        alt: "Digital Art inspired by the anime Mob Psycho, by HuaXuan",
      },
      {
        id: 2,
        title: "Ai",
        img: "/img/huaxuanimg/v2/Fanarts/Ai.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Ai_small.jpg)"},
        alt: "Digital Art of Ai from the anime Oshi no Ko, by HuaXuan"
      },
      {
        id: 3,
        title: "Companion",
        img: "/img/huaxuanimg/v2/Originals/Companion (print).jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/comp-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 4,
        title: "Reze",
        img: "/img/huaxuanimg/v2/Fanarts/CSM Reze 11.17.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/reze-small.jpg)"},
        alt: "Digital Art of Reze from the anime Chainsaw Man, by HuaXuan"
      },
      {
        id: 5,
        title: "Exusiai",
        img: "/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/exu-small.jpg)"},
        alt: "Digital Art of Exusiai from the game Arknights, by HuaXuan"
      },
      {
        id: 6,
        title: "Wonder",
        img: "/img/huaxuanimg/v2/Originals/Wonder 9.19.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/wond-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 7,
        title: "Lost",
        img: "/img/huaxuanimg/v2/Originals/Lost 2022 11.24.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/lost-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 9,
        title: "Festival",
        img: "/img/huaxuanimg/v2/Originals/Festival 11.23.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/fes-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 10,
        title: "Gilgamesh",
        img: "/img/huaxuanimg/v2/Fanarts/FGO Gilgamesh 11x17 (print).jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/gil-small.jpg)"},
        alt: "Digital Art of Gligamesh from the game Fate: Grand Order, by HuaXuan"
      },
      {
        id: 11,
        title: "Bocchi Cringe",
        img: "/img/huaxuanimg/v2/Fanarts/bocchi_cringe.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/bocchi cringe_small.jpg)"},
        alt: "Digital Art of Hitori Gotou (guitarhero / Bocchi) from the hit anime Bocchi the Rock, by HuaXuan"
      },
      {
        id: 1,
        title: "Power",
        img: "/img/huaxuanimg/v2/Fanarts/CSM Power 11.9.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/powe-small.jpg)"},
        alt: "Digital Art of Power from the anime Chainsaw Man, by HuaXuan"
      },
      {
        id: 14,
        title: "Kafka",
        img: "/img/huaxuanimg/v2/Fanarts/HSRKafka.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/hsrk_sm.jpg)"},
        alt: "Digital Art of Kafka from the game Honkai Star Rail, by HuaXuan"
      },
      {
        id: 15,
        title: "Hololive Ina",
        img: "/img/huaxuanimg/v2/Fanarts/HololiveIna.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/HololiveIna_small.jpg)"},
        alt: "Digital Art of vtuber Ninomae Ina'nis from Hololive, by HuaXuan"
      },
      {
        id: 18,
        title: "Daki and Gyutaro",
        img: "/img/huaxuanimg/v2/Fanarts/KnYDakiandGyutaro.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/KnYDakiand Gyutaro_small.jpg)"},
        alt: "Digital Art of Daki and Gyutaro from the anime Kimetsu no Yaiba, by HuaXuan",
      },
      {
        id: 19,
        title: "Natsume",
        img: "/img/huaxuanimg/v2/Fanarts/Natsume.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Natsume_small.jpg)"},
        alt: "Digital Art of Natsume from the anime Natsume Yuujincho, by HuaXuan"
      },
      {
        id: 20,
        title: "Qiubai",
        img: "/img/huaxuanimg/v2/Fanarts/Qiubai.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Qiubai_small.jpg)"},
        alt: "Digital Art of Qiubai, by HuaXuan"
      },
      {
        id: 21,
        title: "Vinland Saga",
        img: "/img/huaxuanimg/v2/Fanarts/VinlandSaga.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Vinland Saga_small.jpg)"},
        alt: "Digital Art of the anime Vinland Saga, by HuaXuan",
      },
      {
        id: 22,
        title: "Celenia",
        img: "/img/huaxuanimg/v2/Originals/Celenia.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Celenia_small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 23,
        title: "Cenenia 1K",
        img: "/img/huaxuanimg/v2/Originals/Celenia1k.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/PixelSquares/Celenia 1k_small.jpg)"},
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
                    <h1 className="banner-text">Portfolio</h1>
                    <h2 className="banner-text">
                      A collection of fanarts and originals
                    </h2>
                  </div>
                </Col>
              </Row>
              <Row className="rowpad">
                {portPics.map((art) => (
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
