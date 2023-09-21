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
        id: 1,
        title: "Power",
        img: "/img/huaxuanimg/v2/Fanarts/CSM Power 11.9.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/v2/Fanarts/powe-small.jpg)"},
        alt: "Digital Art of Power from the anime Chainsaw Man, by HuaXuan"
      },
      {
        id: 2,
        title: "Ai",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/Ai.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Ai_small.jpg)"},
        alt: "Digital Art of Ai from the anime Oshi no Ko, by HuaXuan"
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
        title: "Reze",
        img: "/img/huaxuanimg/v2/Fanarts/CSM Reze 11.17.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/v2/Fanarts/reze-small.jpg)"},
        alt: "Digital Art of Reze from the anime Chainsaw Man, by HuaXuan"
      },
      {
        id: 5,
        title: "Exusiai",
        img: "/img/huaxuanimg/v2/Fanarts/Arknights Exusiai 11x17 (print).jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/v2/Fanarts/exu-small.jpg)"},
        alt: "Digital Art of Exusiai from the game Arknights, by HuaXuan"
      },
      {
        id: 6,
        title: "Wonder",
        img: "/img/huaxuanimg/v2/Originals/Wonder 9.19.22.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/v2/Originals/wond-small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
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
      {
        id: 10,
        title: "Gilgamesh",
        img: "/img/huaxuanimg/v2/Fanarts/FGO Gilgamesh 11x17 (print).jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/v2/Fanarts/gil-small.jpg)"},
        alt: "Digital Art of Gligamesh from the game Fate: Grand Order, by HuaXuan"
      },
      {
        id: 11,
        title: "Bocchi Cringe",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/bocchi_cringe.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/bocchi cringe_small.jpg)"},
        alt: "Digital Art of Hitori Gotou (guitarhero / Bocchi) from the hit anime Bocchi the Rock, by HuaXuan"
      },
      {
        id: 12,
        title: "Enuma Elish",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/FGOEnumaElish.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/FGO Enuma Elish_small.jpg)"},
        alt: "Digital Art inspired by the game Fate: Grand Order, by HuaXuan",
      },
      {
        id: 13,
        title: "Chen",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/Chen.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Chen_small.jpg)"},
        alt: "Digital Art of Chen from the game Arknights, by HuaXuan"
      },
      {
        id: 14,
        title: "Kafka",
        img: "/img/huaxuanimg/Art Profile Pics/HSRKafka.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/hsrk_sm.jpg)"},
        alt: "Digital Art of Kafka from the game Honkai Star Rail, by HuaXuan"
      },
      {
        id: 15,
        title: "Hololive Ina",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/HololiveIna.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/HololiveIna_small.jpg)"},
        alt: "Digital Art of vtuber Ninomae Ina'nis from Hololive, by HuaXuan"
      },
      {
        id: 16,
        title: "Dan Heng IL",
        img: "/img/huaxuanimg/Art Profile Pics/DHIL.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/dhil_sm.jpg)"},
        alt: "Digital Art of Dan Heng IL from the game Honkai Star Rail, by HuaXuan"
      },
      {
        id: 17,
        title: "Hololive Suisei",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/HololiveSuisei.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/HololiveSuisei_small.jpg)"},
        alt: "Digital Art of vtuber Hoshimachi Suisei from Hololive, by HuaXuan"
      },
      {
        id: 18,
        title: "Daki and Gyutaro",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/KnYDakiandGyutaro.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/KnYDakiand Gyutaro_small.jpg)"},
        alt: "Digital Art of Daki and Gyutaro from the anime Kimetsu no Yaiba, by HuaXuan",
      },
      {
        id: 19,
        title: "Natsume",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/Natsume.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Natsume_small.jpg)"},
        alt: "Digital Art of Natsume from the anime Natsume Yuujincho, by HuaXuan"
      },
      {
        id: 20,
        title: "Qiubai",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/Qiubai.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Qiubai_small.jpg)"},
        alt: "Digital Art of Qiubai, by HuaXuan"
      },
      {
        id: 21,
        title: "Vinland Saga",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Fanarts/VinlandSaga.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Vinland Saga_small.jpg)"},
        alt: "Digital Art of the anime Vinland Saga, by HuaXuan",
      },
      {
        id: 22,
        title: "Celenia",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Originals/Celenia.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Celenia_small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 23,
        title: "Cenenia 1K",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Originals/Celenia1k.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Celenia 1k_small.jpg)"},
        alt: "Original digital Art, by HuaXuan",
      },
      {
        id: 24,
        title: "Letter",
        img: "/img/huaxuanimg/aPP/Art Profile Pics/Portfolio/Originals/Letter.jpg",
        small: {backgroundImage: "url(/img/huaxuanimg/aPP/Art Profile Pics/Pixel Squares/Letter_small.jpg)"},
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
