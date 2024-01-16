import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

/**
 * COMPONENT
 */
export const Conventions = (props) => {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalImage, setModalImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const titleSet = (title) => setModalTitle(title);
  const imageSet = (image) => setModalImage(image);

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  const conPics = [
    {
      id: 1,
      title: "Sacanime Winter",
      img: "/img/sacanime.jpg",
      alt: "Sacanime Winter"
    },
    {
      id: 2,
      title: "YumeConUSA",
      img: "/img/YumeConUSA.jpg",
      alt: "YumeConUSA"
    },
    {
      id: 3,
      title: "Mini Art Mart SF",
      img: "/img/mamsf.jpg",
      alt: "Mini Art Mart San Francisco",
    },
    {
      id: 4,
      title: "Mini Art Mart SF",
      img: "/img/MiniArtMartSF.jpg",
      alt: "Mini Art Mart San Francisco"
    },
    {
      id: 5,
      title: "UCSD Triton Gaming Expo",
      img: "/img/UCSDTritonGamingExpo.jpg",
      alt: "UCSD Triton Gaming Expo",
    },
    {
      id: 6,
      title: "UCSD Anime Fest",
      sub: "with genthipa",
      img: "/img/UCSDAnimeFest.jpg",
      alt: "UCSD Anime Fest"
    },
  ];

  return (
    <main>
      <section className="container">
          <div className="homepage">
            <section className="banner" id="portfolio">
              <Container>
                <Row className="rowpad">
                  {conPics.map((art) => (
                    <Col xs={12} md={4} xl={4} key={art.id} className="colpad">
                      <div className="portfolio-effect-container caption">
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
                        <span>{art.title}{"\n"}{art.sub}</span>
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

export default connect(mapState)(Conventions);
